import LenisScroll from "@/components/LenisScroll";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
    return (
        <>
            <LenisScroll />
            <Navbar />
            <div className="md:ml-64">
                <Header />
                <About />
                <Skills />
                {/* <Services /> */}
                <Work />
                <Experience />
                <Contact />
                <Footer />
            </div>
        </>
    )
};