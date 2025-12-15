import Categories from "@/components/home/categories";
import Contact from "@/components/home/contact";
import CustomersSay from "@/components/home/customers-say";
import DocumentOrder from "@/components/home/document-order";
import StartingDocument from "@/components/home/documentOrder";
import HeroSection from "@/components/home/hero";
import LatestNews from "@/components/home/latest-news";
import Works from "@/components/home/works";


const HomePage = () => {
  return (
    <>
      <div className="">
        <HeroSection />
        <Categories />
        <DocumentOrder />
        <Works />
        <LatestNews />
        <Contact />
        <CustomersSay />
        <StartingDocument />
      </div>
    </>
  );
};

export default HomePage;
