import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="w-full bg-[#eaf4f7] px-6 sm:px-12 lg:px-20 py-16 lg:py-24">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

                <p className="uppercase tracking-[0.35em] text-[13px] text-emerald-700 font-medium mb-6">
                    Industrial Symbiosis Platform
                </p>

                <h1
                    className="text-[42px] sm:text-[64px] lg:text-[80px] leading-[1.02] tracking-[-0.03em] text-slate-900 mb-8 font-medium"
                    style={{ fontFamily: "'Libre Bodoni', serif" }}
                >
                    Industrial Waste,
                    <br />
                    Reimagined.
                </h1>

                <p className="text-slate-600 text-[18px] lg:text-[19px] leading-8 max-w-xl mb-10">
                    Helping industries transform reusable by-products
                    into valuable resources through intelligent material
                    matchmaking and industrial collaboration.
                </p>

                {/* Hero Links */}
                <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 text-[17px]">
                    <Link
                        to="/marketplace"
                        className="group inline-flex items-center font-medium text-slate-900 transition-colors hover:text-emerald-700"
                    >
                        Explore Marketplace
                        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>
                    </Link>

                    <Link
                        to="/about"
                        className="group inline-flex items-center font-medium text-slate-500 transition-colors hover:text-slate-900"
                    >
                        Learn More
                        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>
                    </Link>
                </div>

            </div>
        </section>
    );
}

export default Hero;