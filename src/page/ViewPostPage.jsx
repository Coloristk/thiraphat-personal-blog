import { NavBar } from "@/components/LandingPage";
import Footer from "@/components/Footer";
import ViewPostBlog from "@/components/ViewPostBlog";

function ViewPostPage() {
  return (
    <div>
      <NavBar />
      <div className="flex-grow">
        <ViewPostBlog />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default ViewPostPage;
