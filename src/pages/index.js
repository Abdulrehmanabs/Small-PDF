import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Header from "@/components/Landing_Page/Header";
import About from "@/components/Landing_Page/About";
import Popular_Tools from "@/components/Landing_Page/Popular-Tools";
import Pricing from "@/components/Landing_Page/Pricing";
import Why_Choose from "@/components/Landing_Page/Why-Choose";

export default function Home() {
  return (
    <main className={`min-h-screen  ${inter.className}`}>
      <Header></Header>
      <About></About>
      <Popular_Tools></Popular_Tools>
      <Pricing></Pricing>
      <Why_Choose></Why_Choose>
    </main>
  );
}
