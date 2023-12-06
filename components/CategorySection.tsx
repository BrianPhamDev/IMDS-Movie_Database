import React from "react";
import Heading from "./shared/Heading";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

interface Props {
  category: string;
}

const CategorySection = ({ category }: Props) => {
  return (
    <div className="flex-between">
      <Heading>{category}</Heading>

      <Button className="flex-start gap-1">
        <Link href={"/"} className="text-brand-gradient-3">
          See more
        </Link>
        <div className="h-full w-full">
          <Image
            src="/svg/arrow-circle-right.svg"
            width={0}
            height={0}
            style={{ width: "100%", height: "auto" }}
            alt="right-arrow"
          />
        </div>
      </Button>
    </div>
  );
};

export default CategorySection;
