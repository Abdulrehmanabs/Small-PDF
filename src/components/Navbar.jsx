import Link from "next/link";
import { useRouter } from "next/router";

export const Navbar = () => {
  let router = useRouter();
  console.log(router.pathname);
  return (
    <nav
      // className="z-50 sticky"
      className={`z-50 sticky ${
        router.pathname == "/" ? "bg-transparent" : "bg-gray-400"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
        <Link
          href="/"
          className="self-center text-white text-2xl font-semibold whitespace-nowrap"
        >
          Giridot
        </Link>
        <div className="order-2">
          <Link
            href="/login"
            className="text-white font-bold text-sm py-2 me-6"
          >
            LOGIN
          </Link>
          <Link
            href="/signup"
            className="text-[#081E4A] bg-[#FEB92C] font-bold rounded-2xl text-sm px-4 py-2 text-center"
          >
            SUBMIT
          </Link>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto order-1"
          id="navbar-cta"
        >
          <ul className="flex  space-x-8 rtl:space-x-reverse ">
            <li>
              <Link
                href="/"
                className="py-2 px-3 md:p-0 text-white rounded-2xl"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="py-2 px-3 md:p-0 text-white rounded-2xl"
              >
                Newsletter
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="py-2 px-3 md:p-0 text-white rounded-2xl"
              >
                News
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="py-2 px-3 md:p-0 text-white rounded-2xl"
              >
                Advertise
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
