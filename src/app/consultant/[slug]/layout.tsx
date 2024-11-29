import type { Metadata } from "next";
import "../../globals.css";
import consultants from "@/data/consultants";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params: { slug },
}: Readonly<{
  children: React.ReactNode;
  params: { slug: string };
}>) {
  const consultant = consultants.find((consultant) => consultant.slug === slug);
  if (!consultant) return notFound();
  return children;
}