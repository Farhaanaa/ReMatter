import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300">

            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-16">

                <div className="flex flex-col md:flex-row justify-between gap-10">

                    <div>

                        <h2
                            className="text-3xl text-white mb-4"
                            style={{ fontFamily: "'DM Serif Display', serif" }}
                        >
                            ReMatter
                        </h2>

                        <p className="max-w-sm leading-7 text-slate-400">
                            Connecting industries through intelligent material
                            exchange for a more sustainable circular economy.
                        </p>

                    </div>

                    <div className="flex gap-10">

                        <Link
                            to="/about"
                            className="hover:text-white transition"
                        >
                            About
                        </Link>

                        <Link
                            to="/marketplace"
                            className="hover:text-white transition"
                        >
                            Marketplace
                        </Link>

                        <Link
                            to="/recommendations"
                            className="hover:text-white transition"
                        >
                            Recommendations
                        </Link>

                        <Link
                            to="/login"
                            className="hover:text-white transition"
                        >
                            Login
                        </Link>

                    </div>

                </div>

                <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-slate-500 flex flex-col md:flex-row justify-between gap-4">



                    <p>Designed for a sustainable future.</p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;