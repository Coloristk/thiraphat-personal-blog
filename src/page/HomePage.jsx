import { NavBar, HeroSection } from "@/components/LandingPage";
import ArticleSection from "@/components/ArticleSection";
import Footer from "@/components/Footer";

function HomePage() {
  return (
    <div>
      <NavBar />
      <div className="flex-grow">
        <HeroSection />
        <ArticleSection />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
