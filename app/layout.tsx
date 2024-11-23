import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "Feedback USA",
  description: "Generated by Memento Design",
  icons: {
    icon: "/icons/sa-favicon-black.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.variable} mx-[165px] mt-[94px] flex gap-[30px]`}>
        <SideBar />
        <div className="flex flex-col">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
