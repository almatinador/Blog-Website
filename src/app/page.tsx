import LatestArticles from "@/Module/Article/Article";
import Categories from "@/Module/Categories/Categories";
import FeaturedPosts from "@/Module/Feature/Feature";
import HeroSection from "@/Module/Banner/Banner";


export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <div>
        <HeroSection />
      </div>

      {/* featured posts */}
      <div>
        <FeaturedPosts />
      </div>

      {/* Categories */}
      <div>
        <Categories />
      </div>

      {/* article */}
      <div>
        <LatestArticles />
      </div>
    </div>
  );
}
