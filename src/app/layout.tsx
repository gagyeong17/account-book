import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "account-book",
  description: "나연이와 가경이의 가계부에 오신 것을 환영합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen flex justify-center">
      <div className="bg-white max-w-[479px] w-full h-full">{children}</div>
   <Footer/>
    </div>
        </body>
    </html>
  );
}
