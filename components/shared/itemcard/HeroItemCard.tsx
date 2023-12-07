import { formatDate, imageUrl } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Rating from "../Rating";
import { fetchMoviePoster } from "@/lib/actions/movie.action";

interface Props {
  movieId: number;
  releaseDate: string;
  popularity: number;
  originalTitle: string;
}

const HeroItemCard = async ({
  movieId,
  releaseDate,
  popularity,
  originalTitle,
}: Props) => {
  const image = await fetchMoviePoster(movieId);

  return (
    <div className="flex-start gap-8">
      <Link
        href={"/"}
        className="relative h-[140px] w-1/2 overflow-hidden rounded-lg max-lg:max-h-[200px] lg:max-h-[117px] lg:w-3/5"
      >
        <Image
          src={imageUrl(image.backdrops[0].file_path, "w342")}
          width={0}
          height={0}
          style={{ width: "100%", height: "100%" }}
          alt="movie-poster"
          className="absolute object-cover object-center"
        />
      </Link>{" "}
      <div className="flex w-1/2 flex-col gap-2 lg:w-2/5">
        <div className="flex flex-col gap-0.5">
          <p className="meta-info text-secondary">{formatDate(releaseDate)}</p>
          <Link href={"/"}>
            {" "}
            {/* eslint-disable-next-line camelcase */}
            {originalTitle}
          </Link>{" "}
        </div>
        <Rating rating={popularity}></Rating>
      </div>
    </div>
  );
};

export default HeroItemCard;
