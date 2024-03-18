// import { useForm } from "react-hook-form";
import { useState } from "react";
import { Navbar } from "./Navbar";
import { useRouter } from "next/router";

export default function Header() {
  // let { register, handleSubmit } = useForm();
  let [inputValue, setInputValue] = useState("");
  let [category, setCategory] = useState("");
  let router = useRouter();

  function formData(event) {
    event.preventDefault();
    if (category == "All Categories" || inputValue === "") {
      alert("plz fill the recomnded value");
      return;
    }
    router.push("/" + category.split(" ").join("-").toLowerCase());
    console.log(inputValue, category);
  }

  return (
    <div className="relative ">
      <Navbar></Navbar>
      <img
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        src="/Header-BG.png"
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
          <button className="mt-6 me-4 px-6 py-2 text-[18px] font-semibold bg-white rounded-3xl">
            AI Tools Added Today
          </button>
          <button className="mt-6 px-6 py-2 text-[18px] font-semibold bg-white rounded-3xl">
            AI News
          </button>
        </div>
        <form onSubmit={formData} className="max-w-[900px] mx-auto mt-20 flex">
          <div className="bg-[#081E4A] w-[90%] text-white rounded-xl flex overflow-hidden px-6 py-2  border-2 border-white">
            <input
              className="placeholder-current bg-inherit w-full  focus:outline-none"
              type="text"
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              // {...register("inputValue", { required: true })}
              // defaultValue={"I Want an AI to "}
              placeholder="I Want an AI to "
              list="Tools"
            />
            <datalist id="Tools">
              <option value="Compress PDF" />
              <option value="PDF Converter" />
              <option value="PDF Scanner" />
              <option value="Merge PDF" />
              <option value="Split PDF" />
              <option value="Rotate PDF" />
              <option value="Delete PDF Pages" />
              <option value="Extract PDF Pages" />
              <option value="Edit PDF" />
              <option value="PDF Reader" />
              {/* <option value="Number Pages" />
              <option value="AI PDF Summarizer" />
              <option value="PDF to Word" />
              <option value="PDF to Excel" />
              <option value="PDF to PPT" />
              <option value="PDF to JPG" />
              <option value="Word to PDF" />
              <option value="Excel to PDF" />
              <option value="PPT to PDF" />
              <option value="JPG to PDF" />
              <option value="PDF OCR" />
              <option value="eSign PDF" />
              <option value="Unlock PDF" />
              <option value="Protect PDF" />
              <option value="Flatten PDF" /> */}
            </datalist>

            <pre className="sm:block hidden bg-gray-400 w-0 border border-white ms-auto"></pre>
            <select
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="sm:ms-6 bg-inherit  focus:outline-none cursor-pointer"
            >
              <option value="All Categories">All Categories</option>
              <option value="Compress PDF">Compress PDF</option>
              <option value="PDF Converter">PDF Converter</option>
              <option value="PDF Scanner">PDF Scanner </option>
              <option value="Merge PDF">Merge PDF </option>
              <option value="Split PDF">Split PDF </option>
              <option value="Rotate PDF">Rotate PDF </option>
              <option value="Delete PDF Pages">Delete PDF Pages</option>
              <option value="Extract PDF Pages">Extract PDF Pages</option>
              <option value="Edit PDF">Edit PDF</option>
            </select>
          </div>
          <button className="p-4 ms-6 rounded-xl bg-[#FEB92C] flex justify-center  border-2 border-white">
            <img src="/Vector.png" alt="send message" />
          </button>
        </form>
        {/* Extra Spacing in the Bottom */}
        <div className="p-20"></div>
      </div>
      {/* Container */}
    </div>
  );
}
