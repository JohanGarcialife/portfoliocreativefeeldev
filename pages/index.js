import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import Layout from "@/layout/Layout";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Seo from "../components/Seo";

export default function Home() {
  return (
    <Layout>
      <Seo
        title="Creative Feel Dev"
        description="Innovation and creativity at your service"
        keywords="software, software development, development, dev, react, node js, react native, css, HTML, javascript, app dev, app development, android, iOS, android dev, apple dev, iOS dev"
      />
      <HeroSection />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Testimonials />
      <Contact />
    </Layout>
  );
}
