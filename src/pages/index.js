import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Header from "@/components/Landing_Page/Header";
import About from "@/components/Landing_Page/About";
import Popular_Tools from "@/components/Landing_Page/Popular-Tools";
import Pricing from "@/components/Landing_Page/Pricing";
import All_Tools from "@/components/Landing_Page/All-tools";

export default function Home() {
  return (
    <main className={`min-h-screen  ${inter.className}`}>
      <Header></Header>
      <About></About>
      <Popular_Tools></Popular_Tools>
      <Pricing></Pricing>
      <All_Tools></All_Tools>
    </main>
  );
}
