import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Layout/Header";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description: "Portfolio Of Nadeen Ahmed ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased pt-[50px] bg-[#f4f4f4]`}>
        <nav>
          <Navbar />
        </nav>
        <header className="container w-[96%] mx-auto">
          <Header />
        </header>
        <main className="bg-white">
          {children}
        </main>
        <footer>{/* <Footer /> */}</footer>
      </body>
    </html>
  );
}
