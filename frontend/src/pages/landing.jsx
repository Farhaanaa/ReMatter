import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import AboutPreview from "../sections/AboutPreview";
import HowItWorks from "../sections/HowItWorks";
import Features from "../sections/Features";
import CTA from "../sections/CTA";
import Footer from "../components/Footer";

function Landing() {
    return (
        <>
            <Navbar />
            <Hero />
            <AboutPreview />
            <HowItWorks />
            <Features />
            <CTA />
            <Footer />

        </>
    );
}

export default Landing;