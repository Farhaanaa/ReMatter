import { Link } from "react-router-dom";

function CTA() {
    return (
        <section className="bg-[#eaf4f7] py-28">

            <div className="max-w-4xl mx-auto px-6 sm:px-12 text-center">

                <p className="uppercase tracking-[0.35em] text-[13px] text-emerald-700 font-medium mb-5">
                    Get Started
                </p>

                <h2
                    className="text-[46px] sm:text-[56px] leading-tight text-slate-900 mb-8"
                    style={{ fontFamily: "'Libre Bodoni', serif" }}
                >
                    Turn industrial waste
                    <br />
                    into valuable resources.
                </h2>

                <p className="text-lg leading-8 text-slate-600 max-w-2xl mx-auto mb-10">
                    Join ReMatter to discover material exchange opportunities,
                    reduce environmental impact, and build stronger industrial
                    partnerships.
                </p>

                <Link
                    to="/marketplace"
                    className="inline-flex items-center gap-2 text-lg font-medium text-slate-900 hover:text-emerald-700 transition-colors"
                >
                    Explore Marketplace
                    <span className="transition-transform duration-300 hover:translate-x-1">
                        →
                    </span>
                </Link>

            </div>

        </section>
    );
}

export default CTA;