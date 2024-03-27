import Link from "next/link";
import { useRouter } from "next/router";

export const Navbar = () => {
  let router = useRouter();
  console.log(router.pathname);
  return (
    <nav className=" bg-white sticky z-50">
      <div className="flex border px-4">
        <Link href="/" className="flex gap-2 py-2 mr-6">
          <img src="/Brand/brand-logo-img.svg" alt="brand logo" />
          <img src="/Brand/brand-logo-text.svg" alt="brand logo" />
        </Link>
        <Link
          href="/tool/PDF-Compresor"
          className=" hidden sm:inline-block p-4 hover:bg-slate-100 font-semibold text-gray-600"
        >
          Compress
        </Link>
        <Link
          href="/tool/PDF-Convertor"
          className=" hidden sm:inline-block p-4 hover:bg-slate-100 font-semibold text-gray-600"
        >
          Convert
        </Link>
        <Link
          href="/tool/Merge-PDF"
          className=" hidden md:inline-block p-4 hover:bg-slate-100 font-semibold text-gray-600"
        >
          Merge
        </Link>
        <Link
          href="/tool/Edit-PDF"
          className="mr-auto  hidden lg:inline-block p-4 hover:bg-slate-100 font-semibold text-gray-600"
        >
          Edit
        </Link>
        <Link
          href="/"
          className=" hidden lg:inline-block p-4 hover:bg-slate-100 font-semibold text-gray-600"
        >
          Pricing
        </Link>
        <Link
          href="/"
          className=" hidden lg:inline-block p-4 hover:bg-slate-100 font-semibold text-gray-600"
        >
          Teams
        </Link>
        <div className="border my-2 mx-2 hidden lg:inline-block"></div>
        <Link
          href="/"
          className="ml-auto lg:ml-0 p-4 hover:bg-slate-100 font-semibold text-gray-600"
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
    // <nav
    //   // className="z-50 sticky"
    //   className={`z-50 sticky ${
    //     router.pathname == "/" ? "bg-transparent" : "bg-gray-400"
    //   }`}
    // >
    //   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
    //     <Link
    //       href="/"
    //       className="self-center text-white text-2xl font-semibold whitespace-nowrap"
    //     >
    //       Giridot
    //     </Link>
    //     <div className="order-2">
    //       <Link
    //         href="/login"
    //         className="text-white font-bold text-sm py-2 me-6"
    //       >
    //         LOGIN
    //       </Link>
    //       <Link
    //         href="/signup"
    //         className="text-[#081E4A] bg-[#FEB92C] font-bold rounded-2xl text-sm px-4 py-2 text-center"
    //       >
    //         SUBMIT
    //       </Link>
    //     </div>
    //     <div
    //       className="items-center justify-between hidden w-full md:flex md:w-auto order-1"
    //       id="navbar-cta"
    //     >
    //       <ul className="flex  space-x-8 rtl:space-x-reverse ">
    //         <li>
    //           <Link
    //             href="/"
    //             className="py-2 px-3 md:p-0 text-white rounded-2xl"
    //           >
    //             Features
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             href="/"
    //             className="py-2 px-3 md:p-0 text-white rounded-2xl"
    //           >
    //             Newsletter
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             href="/"
    //             className="py-2 px-3 md:p-0 text-white rounded-2xl"
    //           >
    //             News
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             href="/"
    //             className="py-2 px-3 md:p-0 text-white rounded-2xl"
    //           >
    //             Advertise
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};
