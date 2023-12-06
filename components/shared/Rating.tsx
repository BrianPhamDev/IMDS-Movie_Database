import { convertPopularityToRating } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Props = {
  rating: number;
};

const Rating = ({ rating }: Props) => {
  return (
    <>
      <div className="flex-start">
        <div className="h-[24px] w-[24px]">
          <Image
            src="/img/popcorn.png"
            width={0}
            height={0}
            style={{ width: "100%", height: "auto" }}
            alt="right-arrow"
          />
        </div>
        <p className="meta-info">{convertPopularityToRating(rating)}</p>
      </div>
    </>
  );
};

export default Rating;
