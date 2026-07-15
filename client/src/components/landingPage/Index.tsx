import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Features } from "./Features";
import { HowItWorks } from "./HowItWorks";
import { Testimonials } from "./Testimonials";
import { Contact } from "./Contact";
import { Stats } from "./Stats";
import { CTA } from "./CTA";
import { Footer } from "./Footer";


export function Index(){


    return (
        <div className="px-4 sm:px-6 lg:px-24 min-w-full pb-12 h-full bg-white dark:text-white dark:bg-linear-to-bl from-slate-900 to-[#06071B]">
            <Navbar/>
            <Hero/>
            <Features/>
            <HowItWorks/>
            <Stats/>
            <Testimonials/>
            <Contact/>
            <CTA/>
            <Footer/>
        </div>
    )
}