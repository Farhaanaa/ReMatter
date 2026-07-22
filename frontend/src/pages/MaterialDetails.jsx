import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

function MaterialDetails() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [listing, setListing] = useState(null);
    const [materials, setMaterials] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        Promise.all([
            api.get("/waste_listings"),
            api.get("/materials"),
            api.get("/companies"),
        ])
            .then(([listingsRes, materialsRes, companiesRes]) => {
                const selectedListing = listingsRes.data.find(
                    (item) => item.listing_id === id
                );

                setListing(selectedListing);
                setMaterials(materialsRes.data);
                setCompanies(companiesRes.data);
            })
            .catch((error) => console.error(error));
    }, [id]);

    const fetchRecommendations = async () => {
        try {
            const response = await api.get(
                `/recommendations/${listing.listing_id}`
            );

            setRecommendations(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const getMaterial = () =>
        materials.find(
            (item) => item.material_id === listing?.material_id
        );

    const getCompany = () =>
        companies.find(
            (item) => item.company_id === listing?.company_id
        );

    if (!listing) {
        return (
            <main className="min-h-screen flex items-center justify-center bg-[#f8fbfb]">
                <p className="text-lg text-slate-500">Loading...</p>
            </main>
        );
    }

    const material = getMaterial();
    const company = getCompany();

    return (
        <main className="min-h-screen bg-[#f8fbfb] py-16 px-6">

            <div className="max-w-5xl mx-auto">

                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-12">

                    <div className="mb-8">
                        <button
                            onClick={() => navigate(-1)}
                            className="text-slate-600 hover:text-slate-900 transition"
                        >
                            ← Back to Marketplace
                        </button>
                    </div>

                    <div className="text-center">

                        <p className="uppercase tracking-[0.3em] text-xs text-slate-500 mb-3">
                            Material Details
                        </p>

                        <h1 className="text-5xl font-bold text-slate-900">
                            {material?.material_name}
                        </h1>

                        <p className="mt-3 text-lg text-slate-500">
                            {company?.company_name}
                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mt-14">

                        <div className="rounded-2xl border border-slate-200 p-6">
                            <p className="text-sm text-slate-500">
                                Quantity
                            </p>

                            <h3 className="text-2xl font-semibold mt-2">
                                {listing.quantity} {listing.unit}
                            </h3>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-6">
                            <p className="text-sm text-slate-500">
                                Price
                            </p>

                            <h3 className="text-2xl font-semibold mt-2">
                                ₹{listing.price_per_ton} / ton
                            </h3>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-6">
                            <p className="text-sm text-slate-500">
                                Location
                            </p>

                            <h3 className="text-xl font-semibold mt-2">
                                📍 {listing.city}
                            </h3>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-6">
                            <p className="text-sm text-slate-500">
                                Category
                            </p>

                            <h3 className="text-xl font-semibold mt-2">
                                {material?.category}
                            </h3>
                        </div>

                    </div>

                    <div className="mt-12 rounded-2xl border border-slate-200 p-8">

                        <h2 className="text-xl font-semibold text-slate-900">
                            Description
                        </h2>

                        <p className="mt-4 leading-8 text-slate-600">
                            {material?.description}
                        </p>

                    </div>

                    <div className="mt-8 rounded-2xl border border-slate-200 p-8">

                        <h2 className="text-xl font-semibold text-slate-900">
                            Remarks
                        </h2>

                        <p className="mt-4 leading-8 text-slate-600">
                            {listing.remarks}
                        </p>

                    </div>

                    <div className="flex justify-center mt-12">

                        <button
                            onClick={fetchRecommendations}
                            className="px-8 py-4 rounded-xl border border-slate-300 bg-white text-slate-800 font-medium hover:bg-slate-100 transition"
                        >
                            Find Compatible Buyers
                        </button>

                    </div>

                    {recommendations.length > 0 && (

                        <div className="mt-14">

                            <h2 className="text-2xl font-semibold text-slate-900 mb-6">
                                Compatible Buyers
                            </h2>

                            <div className="space-y-4">

                                {recommendations.map((buyer, index) => (

                                    <div
                                        key={index}
                                        className="border border-slate-200 rounded-2xl p-6 transition hover:shadow-sm"
                                    >

                                        <h3 className="text-lg font-semibold text-slate-900">
                                            {buyer.company_name}
                                        </h3>

                                        <p className="mt-2 text-sm text-slate-500">
                                            Recommended buyer for this material.
                                        </p>

                                    </div>

                                ))}

                            </div>

                        </div>

                    )}

                </div>

            </div>

        </main>
    );
}

export default MaterialDetails;