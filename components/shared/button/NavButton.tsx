import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

interface Props {
  href: string;
  children: string;
}

const NavButton = ({ href, children }: Props) => {
  return (
    <Button className="text-primary hover:bg-button flex-center hidden rounded-full bg-transparent px-5 py-4 text-base transition md:flex">
      <Link href={href}>{children}</Link>
    </Button>
  );
};

export default NavButton;
