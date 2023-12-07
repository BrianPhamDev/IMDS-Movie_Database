import OtherSection from "@/components/homepage/OtherSection";
import PopularSection from "@/components/homepage/PopularSection";
import { fetchPopular } from "@/lib/actions/movie.action";

export default async function Home() {
  const data = await fetchPopular();
  return (
    <>
      <PopularSection data={data.results}></PopularSection>
      <OtherSection
        heading="Now Playing"
        category="now_playing"
        className="mt-20"
      ></OtherSection>
      <OtherSection
        heading="Up Coming"
        category="upcoming"
        className="mt-20"
      ></OtherSection>
      <OtherSection
        heading="Top Rated"
        category="top_rated"
        className="mt-20"
      ></OtherSection>
      <OtherSection
        heading="Popular"
        category="popular"
        className="mt-20"
      ></OtherSection>
    </>
  );
}
