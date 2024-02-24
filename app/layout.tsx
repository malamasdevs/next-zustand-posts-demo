import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AddPostModal } from "@/components/AddPostModal";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Malamas Devs - Zustand Tutorial",
  description: "Creating posts using Zustand | Shadcn | Next.js",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AddPostModal />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
