import React from "react";
import CategorySection from "../CategorySection";
import Carousel from "./Carousel";
import { fetchCategory } from "@/lib/actions/movie.action";

interface Props {
  className?: string;
  category: "top_rated" | "popular" | "upcoming" | "now_playing";
  heading: string;
}

const OtherSection = async ({ className, category, heading }: Props) => {
  const data = await fetchCategory(category);
  return (
    <div className={`flex h-fit w-full flex-col gap-6 ${className}`}>
      <CategorySection category={heading}></CategorySection>
      <Carousel data={data.results}></Carousel>
    </div>
  );
};

export default OtherSection;
