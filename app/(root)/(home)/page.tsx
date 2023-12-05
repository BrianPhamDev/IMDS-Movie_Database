import Heading from "@/components/shared/Heading";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex h-fit w-full gap-8">
        <div className="w-full md:w-1/2">
          <Link href={"/"} className="w-full">
            <div className="w-full">
              <Image
                src="/1.png"
                width={0}
                height={0}
                style={{ width: "100%", height: "auto" }}
                alt="IMDS"
                unoptimized
              />
            </div>
          </Link>
        </div>
        <div className="hidden flex-col md:flex md:w-1/2">
          <div className="text-primary flex-between">
            <Heading>Popular</Heading>
            <p>See more</p>
          </div>
        </div>
      </div>
    </>
  );
}
