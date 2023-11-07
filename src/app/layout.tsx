import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "目录结构树生成器",
  description: "目录结构树生成器 | One click automatic directory structure generation ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="">
      <body className={inter.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
