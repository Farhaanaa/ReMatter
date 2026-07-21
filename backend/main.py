from fastapi import FastAPI
import pandas as pd
import os

app = FastAPI()

# Dataset paths
companies_path = os.path.abspath("../dataset/companies.csv")
materials_path = os.path.abspath("../dataset/materials.csv")
rules_path = os.path.abspath("../dataset/compatibility_rules.csv")

# Load datasets
companies = pd.read_csv(companies_path).fillna("")
materials = pd.read_csv(materials_path).fillna("")
compatibility_rules = pd.read_csv(rules_path).fillna("")


@app.get("/")
def home():
    return {"message": "Welcome to ReMatter API!"}


@app.get("/companies")
def get_companies():
    return companies.to_dict(orient="records")


@app.get("/materials")
def get_materials():
    return materials.to_dict(orient="records")


@app.get("/compatibility_rules")
def get_rules():
    return compatibility_rules.to_dict(orient="records")


@app.get("/matches/{material_id}")
def get_matches(material_id: str):
    matches = compatibility_rules[
        compatibility_rules["source_material_id"] == material_id
    ]

    return matches.to_dict(orient="records")