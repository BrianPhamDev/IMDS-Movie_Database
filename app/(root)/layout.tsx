import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="sticky top-0 z-50 w-full ">
        <Navbar></Navbar>
      </header>
      <main className="">
        <section className="mx-auto w-full max-w-[1376px] px-4 md:px-8">
          {children}
        </section>
      </main>
    </>
  );
};

export default Layout;
