import type { Metadata } from "next";
import React from "react";

import "./global.css";

export const metadata: Metadata = {
  title: "IMDS - Movie Database",
  description: "The Movie Database created with NextJS (IMDS)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-gradient h-screen w-screen px-4 md:px-8`}>
        {children}
      </body>
    </html>
  );
}
