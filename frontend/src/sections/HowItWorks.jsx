function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Register",
            description:
                "Industries create their profile and specify the materials they generate or require.",
        },
        {
            number: "02",
            title: "List Waste",
            description:
                "Reusable industrial by-products are published on the marketplace with quantity and location.",
        },
        {
            number: "03",
            title: "Smart Matching",
            description:
                "ReMatter analyzes compatibility rules and recommends the best industrial partners.",
        },
        {
            number: "04",
            title: "Exchange",
            description:
                "Businesses connect directly to reuse materials, reducing waste and creating value.",
        },
    ];

    return (
        <section className="bg-[#f8fbfc] py-28">

            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">

                <div className="text-center max-w-3xl mx-auto mb-20">

                    <p className="uppercase tracking-[0.35em] text-[13px] text-emerald-700 font-medium mb-5">
                        How It Works
                    </p>

                    <h2
                        className="text-[48px] leading-tight text-slate-900 mb-6"
                        style={{ fontFamily: "'Libre Bodoni', serif" }}
                    >
                        Four simple steps.
                        <br />
                        One circular economy.
                    </h2>

                    <p className="text-slate-600 text-lg leading-8">
                        From listing industrial waste to discovering valuable
                        reuse opportunities, ReMatter simplifies industrial
                        collaboration.
                    </p>

                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {steps.map((step) => (

                        <div
                            key={step.number}
                            className="relative bg-white rounded-3xl p-10 border border-slate-200 hover:shadow-lg transition duration-300"
                        >

                            <span
                                className="text-6xl text-slate-200"
                                style={{ fontFamily: "'Libre Bodoni', serif" }}
                            >
                                {step.number}
                            </span>

                            <h3 className="mt-8 text-2xl font-semibold text-slate-900">
                                {step.title}
                            </h3>

                            <p className="mt-5 text-slate-600 leading-8">
                                {step.description}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default HowItWorks;