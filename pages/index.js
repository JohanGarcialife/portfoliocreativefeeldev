import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import Layout from "@/layout/Layout";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <Portfolio />
    </Layout>
  );
}
