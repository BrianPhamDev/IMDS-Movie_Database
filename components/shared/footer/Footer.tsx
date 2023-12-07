import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-footer mb-4 mt-16 w-full md:mt-20">
      <div className="flex-between mx-auto max-w-[1376px] p-4 md:mb-10  md:px-8 md:py-6">
        <Link href="/" className="order-2 flex items-center gap-1">
          <div className="w-[63px] md:w-[96px]">
            <Image
              src="/svg/logo.svg"
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
              alt="IMDS"
            />
          </div>
        </Link>

        <div className="meta-bodycopy">© Brian Pham 2023</div>
      </div>
    </footer>
  );
};

export default Footer;
