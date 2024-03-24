import { Navbar } from "@/components/Navbar";
import All_Tools from "@/components/All-tools";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <>
    <Navbar />
    <Component {...pageProps} />
    <All_Tools></All_Tools>
    <Footer />
  </>
}
