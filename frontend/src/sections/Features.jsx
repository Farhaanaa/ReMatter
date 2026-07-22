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

                {/* Heading */}

                <div className="grid lg:grid-cols-2 gap-16 items-end mb-28">

                    <div>

                        <p className="uppercase tracking-[0.35em] text-[13px] text-emerald-700 font-medium mb-5">
                            Features
                        </p>

                        <h2
                            className="text-[48px] lg:text-[56px] leading-tight text-slate-900"
                            style={{ fontFamily: "'Libre Bodoni', serif" }}
                        >
                            Everything industries need
                            <br />
                            to collaborate smarter.
                        </h2>

                    </div>

                    <p className="text-lg leading-8 text-slate-600 lg:pl-8">
                        Built for manufacturers looking to reduce waste,
                        discover valuable resources, participate in a circular
                        economy, and build sustainable industrial partnerships.
                    </p>

                </div>

                {/* Feature Blocks */}

                <div className="space-y-32">

                    {features.map((feature, index) => (

                        <div
                            key={feature.title}
                            className={`grid lg:grid-cols-2 gap-20 items-center ${index % 2 !== 0
                                    ? "lg:[&>*:first-child]:order-2"
                                    : ""
                                }`}
                        >

                            <div className="flex justify-center">

                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full max-w-[560px] object-contain"
                                />

                            </div>

                            <div>

                                <h3
                                    className="text-[40px] lg:text-[44px] leading-tight text-slate-900 mb-6"
                                    style={{ fontFamily: "'Libre Bodoni', serif" }}
                                >
                                    {feature.title}
                                </h3>

                                <p className="text-lg leading-8 text-slate-600 mb-8">
                                    {feature.description}
                                </p>

                                <div className="w-20 h-[2px] rounded-full bg-emerald-600"></div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Features;