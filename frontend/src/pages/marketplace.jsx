import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import api from "../services/api";
import MaterialCard from "../components/MaterialCard";

function Marketplace() {
    const [materials, setMaterials] = useState([]);

    useEffect(() => {
        api.get("/waste_listings")
            .then((response) => {
                console.log(response.data);
                setMaterials(response.data);
            })
            .catch((error) => {
                console.error("Error fetching materials:", error);
            });
    }, []);

    const filters = [
        "All",
        "Plastic",
        "Metal",
        "Wood",
        "Paper",
        "Textile",
    ];

    return (
        <main className="min-h-screen bg-white">

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
                                    className="ml-4 w-full bg-transparent outline-none text-slate-700"
                                />

                            </div>

                        </div>

                        {/* Filters */}

                        <div className="flex flex-wrap items-center gap-10 mt-10">

                            {filters.map((filter, index) => (

                                <button
                                    key={filter}
                                    className={`relative pb-2 text-[17px] transition-all duration-200 ${index === 0
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

                        {materials.map((item) => (
                            <MaterialCard
                                key={item.listing_id}
                                material={item.material_id}
                                company={item.company_id}
                                quantity={`${item.quantity} ${item.unit}`}
                                location={item.city}
                                category={item.availability_status}
                            />
                        ))}

                    </div>

                </div>

            </section>

        </main>
    );
}

export default Marketplace;