"use client";

import { formatDate, imageUrl } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import AddButton from "../shared/button/AddButton";

type Props = {
  data: any[];
};

const Carousel = ({ data }: Props) => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation]}
        className="h-full w-full overflow-visible"
        spaceBetween={16}
        slidesPerView={3}
        loop
        navigation
        breakpoints={{
          988: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
          1224: {
            slidesPerView: 6,
            spaceBetween: 32,
          },
        }}
      >
        {data.map((item: any) => (
          <SwiperSlide
            key={item.id}
            className="flex w-[130px] flex-col md:max-w-[202px]"
          >
            <Link
              href={"/"}
              className="flex h-[182px] w-full overflow-hidden md:h-[282px]"
            >
              <Image
                src={imageUrl(item.poster_path, "w342")}
                width={0}
                height={0}
                style={{ width: "100%", height: "100%" }}
                alt={item.title}
                className="rounded-lg object-cover object-center"
              />
            </Link>

            <div className="mt-3">
              <div className="flex flex-col justify-between gap-0.5">
                <p className="meta-info text-secondary">
                  {formatDate(item.release_date)}
                </p>
                <Link href={"/"} className="truncate-2-lines h-[48px]">
                  {" "}
                  {/* eslint-disable-next-line camelcase */}
                  {item.title}
                </Link>{" "}
              </div>

              <div className="flex-between mt-4 flex-wrap gap-3">
                <Link
                  href={"/"}
                  className="text-secondary meta-info cursor-pointer underline"
                >
                  Details
                </Link>
                <AddButton></AddButton>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
