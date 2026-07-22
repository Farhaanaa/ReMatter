from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import os

app = FastAPI()

# Allow requests from the React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dataset paths
companies_path = os.path.abspath("../dataset/companies.csv")
materials_path = os.path.abspath("../dataset/materials.csv")
rules_path = os.path.abspath("../dataset/compatibility_rules.csv")
waste_listings_path = os.path.abspath("../dataset/waste_listings.csv")

# Load datasets
companies = pd.read_csv(companies_path).fillna("")
materials = pd.read_csv(materials_path).fillna("")
compatibility_rules = pd.read_csv(rules_path).fillna("")
waste_listings = pd.read_csv(waste_listings_path).fillna("")


@app.get("/")
def home():
    return {"message": "Welcome to ReMatter API!"}


@app.get("/companies")
def get_companies():
    return companies.to_dict(orient="records")

    @app.get("/companies/{company_name}")
def get_company(company_name: str):

    company = companies[
        companies["company_name"] == company_name
    ]

    if company.empty:
        return {"message": "Company not found"}

    return company.iloc[0].to_dict()


@app.get("/materials")
def get_materials():
    return materials.to_dict(orient="records")


@app.get("/compatibility_rules")
def get_rules():
    return compatibility_rules.to_dict(orient="records")


@app.get("/waste_listings")
def get_waste_listings():
    return waste_listings.to_dict(orient="records")


@app.get("/matches/{material_id}")
def get_matches(material_id: str):
    matches = compatibility_rules[
        compatibility_rules["source_material_id"] == material_id
    ]

    return matches.to_dict(orient="records")


@app.get("/recommendations/{listing_id}")
def get_recommendations(listing_id: str):

    # Find the selected waste listing
    listing = waste_listings[
        waste_listings["listing_id"] == listing_id
    ]

    if listing.empty:
        return {"message": "Listing not found"}

    listing = listing.iloc[0]

    material_id = listing["material_id"]

    # Find compatible industries
    rules = compatibility_rules[
        compatibility_rules["source_material_id"] == material_id
    ]

    recommendations = []

    for _, rule in rules.iterrows():

        industry = rule["target_industry"]

        # Find companies in that industry
        matched_companies = companies[
            companies["industry"] == industry
        ]

        for _, company in matched_companies.iterrows():

            recommendations.append({
                "listing_id": listing["listing_id"],
                "material_id": material_id,
                "company_name": company["company_name"],
                "industry": company["industry"],
                "district": company["district"],
                "state": company["state"],
                "application": rule["application"],
                "compatibility_score": float(rule["compatibility_score"])
            })

    recommendations.sort(
        key=lambda x: x["compatibility_score"],
        reverse=True
    )

    return recommendations