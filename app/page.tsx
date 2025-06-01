import HistoricalGallery from "@/components/GalleryLanding";
import ParallaxHero from "@/components/Hero";
import InteractiveEraTimeline from "@/components/TimelineLanding";

export default function Home() {
  return (
   <div>
    <ParallaxHero/>
    {/* <ArticleLanding/> */}
    <InteractiveEraTimeline/>
    <HistoricalGallery/>
   </div>
  );
}
