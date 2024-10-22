import "./App.css";
import { NavBar, HeroSection } from "./components/LandingPage";
import ArticleSection from "./components/ArticleSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ArticleSection />
      <Footer />
    </>
  );
}

export default App;
