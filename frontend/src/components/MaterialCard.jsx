function MaterialCard({
    material,
    company,
    quantity,
    location,
    category,
}) {
    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg">

            <div className="flex items-start justify-between">

                <div>
                    <h3 className="text-2xl font-semibold text-slate-900">
                        {material}
                    </h3>

                    <p className="mt-1 text-slate-500">
                        {company}
                    </p>
                </div>

                <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
                    {quantity}
                </span>

            </div>

            <div className="mt-8 space-y-3 text-slate-600">

                <p>📍 {location}</p>

                <p>Category: {category}</p>

            </div>

            <button className="mt-8 font-medium text-emerald-700 hover:text-emerald-800 transition">
                View Details →
            </button>

        </div>
    );
}

export default MaterialCard;