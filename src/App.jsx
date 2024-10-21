import "./App.css";
import { NavBar, HeroSection, Footer } from "./components/LandingPage";
import { ArticleSection } from "./components/ArticleSection";

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
