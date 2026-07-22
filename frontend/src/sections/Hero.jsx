import { Link } from "react-router-dom";
import HeroImage from "../assets/hero-illustration.png";

function Hero() {
    return (
        <section className="bg-[#eaf4f7]">

            <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24 py-20 lg:py-28">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}

                    <div>

                        <p className="uppercase tracking-[0.35em] text-[13px] text-emerald-700 font-medium mb-6">
                            Industrial Symbiosis Platform
                        </p>

                        <h1
                            className="text-[48px] sm:text-[64px] lg:text-[74px] leading-[0.95] tracking-[-0.04em] text-slate-900 mb-8"
                            style={{ fontFamily: "'Libre Bodoni', serif" }}
                        >
                            Industrial Waste,
                            <br />
                            Reimagined.
                        </h1>

                        <p className="text-slate-600 text-lg leading-8 max-w-lg mb-10">
                            Helping industries transform reusable by-products
                            into valuable resources through intelligent
                            material matchmaking and industrial collaboration.
                        </p>

                        <div className="flex flex-wrap items-center gap-8 text-[17px]">

                            <Link
                                to="/marketplace"
                                className="group inline-flex items-center font-medium text-slate-900 hover:text-emerald-700 transition"
                            >
                                Explore Marketplace
                                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </Link>

                            <Link
                                to="/about"
                                className="group inline-flex items-center font-medium text-slate-500 hover:text-slate-900 transition"
                            >
                                Learn More
                                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </Link>

                        </div>

                    </div>

                    {/* RIGHT IMAGE */}

                    <div className="flex justify-center lg:justify-end">

                        <img
                            src={HeroImage}
                            alt="Industrial Symbiosis Illustration"
                            className="w-full max-w-[620px] object-contain"
                        />

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;