import HistoricalGallery from "@/components/GalleryLanding";
import ParallaxHero from "@/components/Hero";
import QuizLanding from "@/components/QuizLanding";
import InteractiveEraTimeline from "@/components/TimelineLanding";

export default function Home() {
  return (
   <div className="bg-[#f3fde2]">
    <ParallaxHero/>
    {/* <ArticleLanding/> */}
    <InteractiveEraTimeline/>
    <hr className="mx-40"/>
    <HistoricalGallery/>
    <hr />
    <QuizLanding/>
   </div>
  );
}
