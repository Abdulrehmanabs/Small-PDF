import Link from "next/link";
import { useRouter } from "next/router";

export const Navbar = () => {
  let router = useRouter();
  // console.log(router);
  return (
    <nav className=" bg-white sticky z-50">
      <div className="flex border px-4">
        <Link href="/" className="flex gap-2 py-2 mr-6">
          <img src="/Brand/brand-logo-img.svg" alt="brand logo" />
          <img src="/Brand/brand-logo-text.svg" alt="brand logo" />
        </Link>
        <Link
          href="/tool/Compress-PDF"
          className={` hidden sm:inline-block p-4 hover:text-blue-600 font-semibold ${
            router?.query?.tool?.includes("Compress") ? "text-blue-600" : ""
          }`}
        >
          Compress
        </Link>
        <Link
          href="/tool/PDF-Convertor"
          className={` hidden lg:inline-block p-4 hover:text-blue-600 font-semibold ${
            router?.query?.tool?.includes("Convert") ? "text-blue-600" : ""
          }`}
        >
          Convert
        </Link>
        <Link
          href="/tool/Merge-PDF"
          className={` hidden md:inline-block p-4 hover:text-blue-600 font-semibold ${
            router?.query?.tool?.includes("Merge") ? "text-blue-600" : ""
          }`}
        >
          Merge
        </Link>
        <Link
          href="/tool/Edit-PDF"
          className={`hidden md:inline-block  p-4 hover:text-blue-600 font-semibold ${
            router?.query?.tool?.includes("Edit") ? "text-blue-600" : ""
          }`}
        >
          Edit
        </Link>
        <Link
          href="/tool/eSign-PDF"
          className={`mr-auto hidden md:inline-block  p-4 hover:text-blue-600 font-semibold ${
            router?.query?.tool?.includes("eSign") ? "text-blue-600" : ""
          }`}
        >
          eSign
        </Link>
        <Link
          href="/Pricing"
          className={` hidden lg:inline-block p-4 hover:text-blue-600 font-semibold ${
            router?.asPath?.includes("Pricing") ? "text-blue-600" : ""
          }`}
        >
          Pricing
        </Link>
        <Link
          href="/Teams"
          className={` hidden lg:inline-block p-4 hover:text-blue-600 font-semibold ${
            router?.asPath?.includes("Teams") ? "text-blue-600" : ""
          }`}
        >
          Teams
        </Link>
        <div className="border my-2 mx-2 hidden lg:inline-block"></div>
        <Link
          href="/Log-In"
          className={`ml-auto lg:ml-0 p-4 hover:text-blue-600 font-semibold ${
            router?.asPath?.includes("Log-In") ? "text-blue-600" : ""
          }`}
        >
          Log In
        </Link>
        <div className="py-4">
          <Link
            href="/"
            className="px-4 ml-2 py-2 whitespace-nowrap rounded bg-blue-500 hover:bg-blue-600 font-bold text-white"
          >
            Free Trial
          </Link>
        </div>
      </div>
    </nav>
  );
};
