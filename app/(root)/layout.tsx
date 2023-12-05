import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative">
      <Navbar></Navbar>

      <section className="w-full px-4 md:px-8">{children}</section>
    </main>
  );
};

export default Layout;
