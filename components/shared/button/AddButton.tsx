import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  children?: string;
}

const AddButton = ({ children = "Add" }: Props) => {
  return (
    <Link
      href={"/"}
      className="flex-start bg-button gap-2 rounded-full px-3 py-1.5 text-brand-gradient-3"
    >
      <div className="h-[13px] w-[13px]">
        <Image
          src="/svg/plus.svg"
          width={0}
          height={0}
          style={{ width: "100%", height: "100%" }}
          alt="right-arrow"
        />
      </div>
      <p className="meta-info">{children}</p>
    </Link>
  );
};

export default AddButton;
