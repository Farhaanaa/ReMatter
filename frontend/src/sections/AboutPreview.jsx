function AboutPreview() {
    const problems = [
        {
            number: "01",
            title: "Industrial waste goes unused",
            description:
                "Factories discard reusable by-products because there is no efficient way to discover industries that can utilize them.",
        },
        {
            number: "02",
            title: "Finding the right match is difficult",
            description:
                "Even when reusable materials exist, companies struggle to identify compatible industries and trusted partners.",
        },
        {
            number: "03",
            title: "Circular economy needs better tools",
            description:
                "ReMatter connects waste generators with manufacturers, enabling sustainable material exchange and reducing landfill waste.",
        },
    ];

    return (
        <section className="bg-white py-28">

            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">

                {/* Heading */}

                <div className="grid lg:grid-cols-2 gap-16 items-end mb-24">

                    <div>

                        <p className="uppercase tracking-[0.35em] text-[13px] text-emerald-700 font-medium mb-5">
                            Why ReMatter?
                        </p>

                        <h2
                            className="text-[48px] lg:text-[56px] leading-tight text-slate-900"
                            style={{ fontFamily: "'Libre Bodoni', serif" }}
                        >
                            Waste is valuable.
                            <br />
                            The connection is missing.
                        </h2>

                    </div>

                    <p className="text-lg leading-8 text-slate-600 lg:pl-8">
                        ReMatter bridges the gap between industries by helping
                        companies discover valuable material exchange
                        opportunities instead of sending reusable waste to
                        landfills.
                    </p>

                </div>

                {/* Cards */}

                <div className="grid md:grid-cols-3 gap-8">

                    {problems.map((item) => (

                        <div
                            key={item.number}
                            className="rounded-3xl border border-slate-200 p-10 transition hover:-translate-y-1 hover:shadow-lg"
                        >

                            <span
                                className="text-5xl text-slate-300"
                                style={{ fontFamily: "'Libre Bodoni', serif" }}
                            >
                                {item.number}
                            </span>

                            <h3 className="mt-8 text-2xl font-semibold text-slate-900">
                                {item.title}
                            </h3>

                            <p className="mt-5 text-slate-600 leading-8">
                                {item.description}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default AboutPreview;