import FeaturedPost from "@/components/Home/FeaturedPost";
import HomeHeroSection from "@/components/Home/HomeHeroSection";
import PopularCategories from "@/components/Home/PopularCategories";

export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center">
      <HomeHeroSection />
      <FeaturedPost />
      <PopularCategories />
    </main>
  );
}
