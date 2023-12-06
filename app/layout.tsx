import type { Metadata } from "next";
import React from "react";

import "./globals.css";

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
      <body className={`bg-gradient h-screen w-screen`}>{children}</body>
    </html>
  );
}
