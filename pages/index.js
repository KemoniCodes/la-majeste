import Hero from "@/components/Hero"
import FeaturedProducts from "@/components/FeaturedProducts"
import Marquee from "@/components/Marquee"
import Callout from "@/components/Callout"
import Newsletter from "@/components/Newsletter"
import Footer from "@/components/Layout/Footer"


export default function Home() {
    return (
        <>
            <Hero />
            <FeaturedProducts />
            <Marquee />
            <Callout />
            <Newsletter />
            <Footer />
        </>
    )
}