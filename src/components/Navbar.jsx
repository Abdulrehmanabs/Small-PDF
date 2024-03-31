import Link from "next/link";
import { useRouter } from "next/router";
import All_Tools from "./All-tools";

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
        <button
          className={`flex items-center relative p-4 hover:text-blue-600 font-semibold  
            ${
              router?.query?.tool && "text-blue-600  border-blue-700 border-b-2"
            }
          `}
        >
          <label
            htmlFor="dropdown-open"
            className="h-full w-full absolute top-0 left-0 cursor-pointer"
          ></label>
          <svg
            className="w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M4 5.125C4 4.504 4.504 4 5.125 4h1.75C7.496 4 8 4.504 8 5.125v1.75C8 7.496 7.496 8 6.875 8h-1.75A1.125 1.125 0 0 1 4 6.875zm6 0C10 4.504 10.504 4 11.125 4h1.75C13.496 4 14 4.504 14 5.125v1.75C14 7.496 13.496 8 12.875 8h-1.75A1.125 1.125 0 0 1 10 6.875zM17.25 4C16.56 4 16 4.56 16 5.25v1.5c0 .69.56 1.25 1.25 1.25h1.5C19.44 8 20 7.44 20 6.75v-1.5C20 4.56 19.44 4 18.75 4zM16 11.125c0-.621.504-1.125 1.125-1.125h1.75c.621 0 1.125.504 1.125 1.125v1.75c0 .621-.504 1.125-1.125 1.125h-1.75A1.125 1.125 0 0 1 16 12.875zM17.125 16c-.621 0-1.125.504-1.125 1.125v1.75c0 .621.504 1.125 1.125 1.125h1.75c.621 0 1.125-.504 1.125-1.125v-1.75c0-.621-.504-1.125-1.125-1.125zM10 11.125c0-.621.504-1.125 1.125-1.125h1.75c.621 0 1.125.504 1.125 1.125v1.75c0 .621-.504 1.125-1.125 1.125h-1.75A1.125 1.125 0 0 1 10 12.875zM11.125 16c-.621 0-1.125.504-1.125 1.125v1.75c0 .621.504 1.125 1.125 1.125h1.75c.621 0 1.125-.504 1.125-1.125v-1.75c0-.621-.504-1.125-1.125-1.125zM4 11.125C4 10.504 4.504 10 5.125 10h1.75C7.496 10 8 10.504 8 11.125v1.75C8 13.496 7.496 14 6.875 14h-1.75A1.125 1.125 0 0 1 4 12.875zM5.125 16C4.504 16 4 16.504 4 17.125v1.75C4 19.496 4.504 20 5.125 20h1.75C7.496 20 8 19.496 8 18.875v-1.75C8 16.504 7.496 16 6.875 16z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Tools
          <svg
            className="w-4 rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M3 10h10L8 5z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <input
          type="checkbox"
          className="peer hidden"
          id="dropdown-open"
          defaultChecked=""
        />
        <div className="peer-checked:block -z-10 hidden absolute top-14 left-0 w-full max-h-[100vh] overflow-auto bg-white shadow-lg">
          <All_Tools></All_Tools>
        </div>
        <Link
          href="/tool/Compress-PDF"
          className={` hidden lg:inline-block p-4 hover:text-blue-600 font-semibold ${
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
        {/* <Link
          href="/Teams"
          className={` hidden lg:inline-block p-4 hover:text-blue-600 font-semibold ${
            router?.asPath?.includes("Teams") ? "text-blue-600" : ""
          }`}
        >
          Teams
        </Link> */}
        <div className="border my-2 mx-2 hidden lg:inline-block"></div>
        <Link
          href="/Log-In"
          className={`hidden sm:inline-block ml-auto lg:ml-0 p-4 hover:text-blue-600 font-semibold ${
            router?.asPath?.includes("Log-In") ? "text-blue-600" : ""
          }`}
        >
          Log In
        </Link>
        <div className="py-2">
          <Link
            href="/"
            className="hidden sm:inline-flex px-4 ml-2 py-2 whitespace-nowrap rounded bg-blue-500 hover:bg-blue-600 font-bold text-white"
          >
            Free Trial
          </Link>
        </div>
      </div>
    </nav>
  );
};
