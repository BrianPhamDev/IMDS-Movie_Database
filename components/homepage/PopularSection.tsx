import Image from "next/image";
import Link from "next/link";
import CategorySection from "../CategorySection";
import HeroItemCard from "../shared/itemcard/HeroItemCard";
import Rating from "../shared/Rating";
import { generateRandomIndexs, getYear, imageUrl } from "@/lib/utils";

interface Props {
  data: any;
}

const PopularSection = ({ data }: Props) => {
  const indexs = generateRandomIndexs(data.length);
  const leftDatas: any[] = [data[indexs[1]], data[indexs[2]], data[indexs[3]]];

  return (
    <div className="flex h-fit w-full flex-col gap-8 lg:flex-row">
      <div className="w-full lg:w-7/12">
        <Link href={"/"} className="h-full w-full">
          <div className="relative h-full max-h-[455px] w-full overflow-hidden rounded-lg max-sm:max-h-[320px]">
            <div className="gradient-overlay"></div>
            <Image
              src={imageUrl(data[indexs[0]].poster_path, "original")}
              width={0}
              height={0}
              style={{ width: "100%", height: "100%" }}
              alt="IMDS"
              className="object-cover"
            />

            <div className="bg-hero-card absolute bottom-0 left-0 z-10 flex max-w-[508px] -translate-y-8 translate-x-8 flex-col gap-2 overflow-hidden rounded-sm border-l-[3px] border-solid border-brand-primary py-4 pl-6 pr-12 max-sm:max-w-[256px] max-sm:-translate-y-12 max-sm:translate-x-4 max-sm:px-3 tablet:flex">
              <div className="flex-start gap-3">
                <h1 className="hero-heading">
                  {data[indexs[0]].original_title} (
                  {getYear(data[indexs[0]].release_date)})
                </h1>
                <Rating rating={data[indexs[0]].popularity}></Rating>
              </div>
              <p className="bodycopy text-secondary truncate-4-lines max-sm:hidden">
                {data[indexs[0]].overview}
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex w-full flex-col gap-6  lg:w-5/12 lg:gap-4">
        <CategorySection category="Popular"></CategorySection>
        <div className=" flex flex-1 flex-col gap-8 lg:grid lg:grid-cols-[minmax(_1fr,117px)_minmax(_1fr,117px)_minmax(_1fr,117px)] lg:gap-6">
          {leftDatas.map((item: any) => {
            return (
              <HeroItemCard
                key={item.id}
                movieId={item.id}
                releaseDate={item.release_date}
                popularity={item.popularity}
                originalTitle={item.original_title}
              ></HeroItemCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularSection;
