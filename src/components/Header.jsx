import { Navbar } from "./Navbar";

export default function Header() {
  return (
    <div className="relative ">
      <Navbar></Navbar>
      <img
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        src="Header-BG.png"
        alt="header-greadient"
      />

      <div className="mx-auto text-center px-6 lg:px-8 py-24 sm:py-48">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-[25px] font-[600] mb-8 text-white">
            Welcome to Giridot
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white">
            Instantly Build an AI Chatbot with your Knowledge Base.
          </h2>
          <p className="mx-auto w-[80%]  mt-6 text-[19px] leading-6 text-gray-200">
            Share your site Link or Upload any PDF file to create a ChatGPT
            powered custom chatbot in 5 Minutes.
          </p>
          <div className="flex justify-center">
            <button className="mt-6 me-4 px-6 py-2 text-[18px] font-semibold bg-white rounded-3xl">
              AI Tools Added Today
            </button>
            <button className="mt-6 px-6 py-2 text-[18px] font-semibold bg-white rounded-3xl">
              AI News
            </button>
          </div>
        </div>
        <div className="max-w-[900px] mx-auto mt-20 flex">
          <div className="bg-[#081E4A] w-[90%] text-white rounded-xl flex overflow-hidden px-6 py-2  border-2 border-white">
            <input
              className="placeholder-current bg-inherit w-full  focus:outline-none"
              type="text"
              placeholder="I Want an AI to "
              defaultValue={"I Want an AI to "}
            />
            <pre className="sm:block hidden bg-gray-400 w-0 border border-white ms-auto"></pre>
            <select className="sm:ms-6 bg-inherit  focus:outline-none cursor-pointer">
              <option>All Categories</option>
            </select>
          </div>
          <button className="p-4 ms-6 rounded-xl bg-[#FEB92C]  border-2 border-white">
            <img src="vector.png" alt="send message" />
          </button>
        </div>
        <div className="p-20"></div>
      </div>
      {/* Container */}
    </div>
  );
}
