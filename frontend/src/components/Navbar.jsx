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
                        sstyle={{ fontFamily: "'DM Serif Display', serif" }}
                    >
                        ReMatter
                    </Link>

                    {/* Center Links */}
                    <div className="hidden md:flex items-center gap-10">

                        <Link
                            to="/marketplace"
                            className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition"
                        >
                            Marketplace
                        </Link>

                        <Link
                            to="/recommendations"
                            className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition"
                        >
                            Recommendations
                        </Link>

                        <Link
                            to="/about"
                            className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition"
                        >
                            About
                        </Link>

                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-4">

                        <Link
                            to="/login"
                            className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition"
                        >
                            Login
                        </Link>

                        <Link
                            to="/dashboard"
                            className="bg-slate-900 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-slate-800 transition"
                        >
                            Get Started
                        </Link>

                    </div>

                </nav>

            </div>
        </header>
    );
}

export default Navbar;