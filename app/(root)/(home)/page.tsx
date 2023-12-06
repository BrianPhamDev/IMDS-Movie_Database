import OtherSection from "@/components/homepage/OtherSection";
import PopularSection from "@/components/homepage/PopularSection";
import { fetchPopular } from "@/lib/actions/movie.action";

export default async function Home() {
  const data = await fetchPopular();
  return (
    <>
      <PopularSection data={data.results}></PopularSection>
      <OtherSection></OtherSection>
    </>
  );
}
