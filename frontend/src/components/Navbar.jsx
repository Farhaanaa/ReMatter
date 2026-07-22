import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header className="w-full bg-[#eaf4f7]">
            <div className="max-w-7xl mx-auto px-8 py-6">

                {/* Navigation Card */}
                <nav className="bg-white rounded-2xl shadow-sm border border-slate-100 px-8 py-4 flex items-center justify-between">

                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-3xl font-bold tracking-tight text-slate-900"
                        style={{ fontFamily: "'Libre Bodoni', serif" }}
                    >
                        ReMatter
                    </Link>

                    {/* Center Links */}
                    <div className="hidden md:flex items-center gap-10">

                        <Link
                            to="/marketplace"
                            className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors"
                        >
                            Marketplace
                        </Link>

                        <Link
                            to="/recommendations"
                            className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors"
                        >
                            Recommendations
                        </Link>

                        <Link
                            to="/about"
                            className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors"
                        >
                            About
                        </Link>

                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-8">

                        <Link
                            to="/login"
                            className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors"
                        >
                            Login
                        </Link>

                        <Link
                            to="/dashboard"
                            className="group inline-flex items-center text-sm font-medium text-slate-900 hover:text-emerald-600 transition-colors"
                        >
                            Get Started
                            <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </Link>

                    </div>

                </nav>

            </div>
        </header>
    );
}

export default Navbar;