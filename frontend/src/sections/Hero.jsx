import { Link } from "react-router-dom";
import HeroImage from "../assets/hero-illustration.png";

function Hero() {
    return (
        <section className="bg-[#eaf4f7]">
            <div className="max-w-7xl mx-auto px-12 lg:px-20 pt-12 pb-24">

                <div className="grid lg:grid-cols-[0.95fr_1.05fr] items-center gap-16">

                    {/* LEFT CONTENT */}
                    <div>

                        <p className="uppercase tracking-[0.35em] text-[13px] text-emerald-700 font-medium mb-6">
                            Industrial Symbiosis Platform
                        </p>

                        <h1
                            className="text-[82px] leading-[0.95] tracking-[-0.03em] text-slate-900 mb-8 font-semibold"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Industrial Waste,
                            <br />
                            Reimagined.
                        </h1>

                        <p className="text-slate-600 text-[18px] leading-8 max-w-lg mb-10">
                            Helping industries transform reusable by-products into valuable
                            resources through intelligent material matchmaking and industrial
                            collaboration.
                        </p>

                        <div className="flex items-center gap-4">

                            <Link
                                to="/marketplace"
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-slate-900 px-8 py-3.5 text-white font-medium transition hover:bg-slate-800"
                            >
                                Explore Marketplace
                            </Link>

                            <Link
                                to="/about"
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-slate-300 bg-white px-8 py-3.5 text-slate-800 font-medium transition hover:bg-slate-50"
                            >
                                Learn More
                            </Link>

                        </div>

                    </div>

                    {/* RIGHT IMAGE */}

                    <div className="flex justify-center">

                        <img
                            src={HeroImage}
                            alt="Industrial Symbiosis Illustration"
                            className="w-full max-w-[720px] object-contain drop-shadow-xl"
                        />

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Hero;