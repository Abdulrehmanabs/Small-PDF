import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Header from "@/components/Header";
import About from "@/components/About";
import Tools from "@/components/Tools";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className={`min-h-screen  ${inter.className}`}>
      <Header></Header>
      <About></About>
      <Tools></Tools>
      <Footer></Footer>
    </main>
  );
}