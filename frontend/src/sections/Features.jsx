import FeatureMatching from "../assets/feature-matching.png";
import FeatureMarketplace from "../assets/feature-marketplace.png";
import FeatureSustainability from "../assets/feature-sustainability.png";

function Features() {
    const features = [
        {
            title: "Intelligent Material Matching",
            description:
                "Our recommendation engine identifies compatible industries based on reusable materials, helping businesses discover valuable industrial symbiosis opportunities quickly and efficiently.",
            image: FeatureMatching,
        },
        {
            title: "Centralized Marketplace",
            description:
                "Browse reusable industrial by-products, explore nearby opportunities, and connect with verified companies through one unified marketplace.",
            image: FeatureMarketplace,
        },
        {
            title: "Sustainability Insights",
            description:
                "Visualize the environmental impact of material reuse through sustainability metrics, circular economy insights, and waste reduction analytics.",
            image: FeatureSustainability,
        },
    ];

    return (
        <section className="bg-white py-28">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">

                <div className="max-w-3xl mb-24">

                    <p className="uppercase tracking-[0.35em] text-[13px] text-emerald-700 font-medium mb-5">
                        Features
                    </p>

                    <h2
                        className="text-[48px] leading-tight text-slate-900 mb-6"
                        style={{ fontFamily: "'Libre Bodoni', serif" }}
                    >
                        Everything industries need
                        <br />
                        to collaborate smarter.
                    </h2>

                    <p className="text-lg leading-8 text-slate-600">
                        Built for manufacturers looking to reduce waste,
                        discover valuable resources, and participate in a
                        circular economy.
                    </p>

                </div>

                <div className="space-y-28">

                    {features.map((feature, index) => (

                        <div
                            key={feature.title}
                            className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                                }`}
                        >

                            {/* Illustration */}

                            <div className="flex justify-center">

                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full max-w-[520px] object-contain"
                                />

                            </div>

                            {/* Content */}

                            <div>

                                <h3
                                    className="text-[40px] leading-tight text-slate-900 mb-6"
                                    style={{ fontFamily: "'Libre Bodoni', serif" }}
                                >
                                    {feature.title}
                                </h3>

                                <p className="text-lg leading-8 text-slate-600 mb-8">
                                    {feature.description}
                                </p>

                                <div className="h-[2px] w-20 bg-emerald-600 rounded-full"></div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}

export default Features;