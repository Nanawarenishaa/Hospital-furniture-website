import HeroSection from "./HeroSection"
import RecentProducts from "./RecentProducts"
import SectionTitle from "../../components/ui/SectionTItle"
import TrendingProducts from "./TrendingProducts"
import Testimonials from "./Testimonials"
import AboutGrid from "../about/AboutGrid"
import Testimonial2 from "./Testimonial2"
import SectTitle from "../../components/ui/SectTitle"

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-slate-100">
     <HeroSection />
     <AboutGrid />
     <SectionTitle title="Recent Products" subtitle="Check out our latest offerings" />
     <RecentProducts />
     <SectionTitle title="Trending Products" subtitle="Explore our most popular items right now" />
     <TrendingProducts />
     <SectionTitle title=" Testimonials" subtitle="What our customers are saying" />
     <Testimonials />
    <SectTitle  title=" Testimonials" subtitle="What our customers are saying" />
     <Testimonial2  />
    </div>
  )
}

export default Home