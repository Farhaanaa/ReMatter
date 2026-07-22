import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import api from "../services/api";
import MaterialCard from "../components/MaterialCard";
import Navbar from "../components/Navbar";

function Marketplace() {
    const [listings, setListings] = useState([]);
    const [materials, setMaterials] = useState([]);
    const [companies, setCompanies] = useState([]);

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedFilter, setSelectedFilter] = useState("All");

    useEffect(() => {
        Promise.all([
            api.get("/waste_listings"),
            api.get("/materials"),
            api.get("/companies"),
        ])
            .then(([listingsRes, materialsRes, companiesRes]) => {
                setListings(listingsRes.data);
                setMaterials(materialsRes.data);
                setCompanies(companiesRes.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    // Generate filters dynamically
    const filters = [
        "All",
        ...new Set(materials.map((material) => material.category)),
    ];

    // Lookup material name
    const getMaterialName = (materialId) => {
        const material = materials.find(
            (item) => item.material_id === materialId
        );

        return material ? material.material_name : materialId;
    };

    // Lookup company name
    const getCompanyName = (companyId) => {
        const company = companies.find(
            (item) => item.company_id === companyId
        );

        return company ? company.company_name : companyId;
    };

    // Lookup category
    const getMaterialCategory = (materialId) => {
        const material = materials.find(
            (item) => item.material_id === materialId
        );

        return material ? material.category : "Unknown";
    };

    // Search & Filter
    const filteredListings = listings.filter((item) => {
        const materialName = getMaterialName(item.material_id).toLowerCase();
        const companyName = getCompanyName(item.company_id).toLowerCase();
        const category = getMaterialCategory(item.material_id).toLowerCase();

        const matchesSearch =
            materialName.includes(searchTerm.toLowerCase()) ||
            companyName.includes(searchTerm.toLowerCase());

        const matchesFilter =
            selectedFilter === "All" ||
            category === selectedFilter.toLowerCase();

        return matchesSearch && matchesFilter;
    });

    return (
        <main className="min-h-screen bg-white">

            <Navbar />
            {/* Header */}

            <section className="bg-[#f4fafb] border-b border-slate-200">

                <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24 py-20">

                    <p className="uppercase tracking-[0.35em] text-[13px] text-emerald-700 font-medium mb-5">
                        Marketplace
                    </p>

                    <h1
                        className="text-[48px] lg:text-[64px] leading-[0.98] tracking-[-0.04em] text-slate-900 mb-6"
                        style={{ fontFamily: "'Libre Bodoni', serif" }}
                    >
                        Browse Industrial
                        <br />
                        Resources
                    </h1>

                    <p className="max-w-2xl text-lg leading-8 text-slate-600">
                        Discover reusable industrial materials shared by industries across the network.
                    </p>

                </div>

            </section>

            {/* Search & Filters */}

            <section className="py-14">

                <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24">

                    <div className="rounded-3xl border border-slate-200 bg-[#fbfdfd] p-8">

                        {/* Search */}

                        <div className="max-w-3xl">

                            <div className="flex items-center rounded-full border border-slate-300 bg-white py-4 px-5 shadow-sm">

                                <Search
                                    size={20}
                                    strokeWidth={1.75}
                                    className="text-slate-400"
                                />

                                <input
                                    type="text"
                                    placeholder="Search materials or companies..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="ml-4 w-full bg-transparent outline-none text-slate-700"
                                />

                            </div>

                        </div>

                        {/* Filters */}

                        <div className="flex flex-wrap items-center gap-10 mt-10">

                            {filters.map((filter) => (

                                <button
                                    key={filter}
                                    onClick={() => setSelectedFilter(filter)}
                                    className={`relative pb-2 text-[17px] transition-all duration-200 ${selectedFilter === filter
                                        ? "font-semibold text-slate-900 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-emerald-600"
                                        : "text-slate-500 hover:text-emerald-700"
                                        }`}
                                >
                                    {filter}
                                </button>

                            ))}

                        </div>

                    </div>

                    {/* Material Cards */}

                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-14">

                        {filteredListings.length > 0 ? (
                            filteredListings.map((item) => (
                                <MaterialCard
                                    key={item.listing_id}
                                    id={item.listing_id}
                                    material={getMaterialName(item.material_id)}
                                    company={getCompanyName(item.company_id)}
                                    quantity={`${item.quantity} ${item.unit}`}
                                    location={item.city}
                                    category={getMaterialCategory(item.material_id)}
                                />
                            ))
                        ) : (
                            <div className="col-span-full py-20 text-center">

                                <h3 className="text-2xl font-semibold text-slate-700">
                                    No materials found
                                </h3>

                                <p className="mt-2 text-slate-500">
                                    Try changing your search or selecting a different category.
                                </p>

                            </div>
                        )}

                    </div>

                </div>

            </section>

        </main>
    );
}

export default Marketplace;