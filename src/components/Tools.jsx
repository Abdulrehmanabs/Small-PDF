import React from "react";

const Tools = () => {
  return (
    // <div>
    //   <div className="relative bg-[#F5F5F5] p-24">
    //     <h2 className="mb-6 text-center text-[#081E4A]  text-2xl sm:text-3xl md:text-4xl  font-bold tracking-tight">
    //       Most <span>Popular</span> PDF Tools
    //     </h2>
    //     <p className="text-center">
    //       21 tools to convert, compress, and edit PDFs for free. Try it out
    //       today!
    //     </p>
    //   </div>
    // </div>
    <section className="relative overflow-hidden bg-gray-100 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto px-6">
        <div className="text-center ">
          <h2 className="text-3xl font-semibold text-[#081E4A] sm:text-4xl xl:text-5xl">
            Most Popular PDF Tools
          </h2>

          <p className="text-center mt-4">
            21 tools to convert, compress, and edit PDFs for free. Try it out
            today!
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-screen-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left ">
          <a
            href="#"
            className="backdrop-blur-lg mb-3 rounded-xl bg-white/70 text-left p-4 lg:p-8 hover:-translate-y-2 transition-transform duration-700 border shadow"
          >
            <div className="font-bold flex">
              <span className="">PDF to Word</span>
              <svg
                className="ms-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
              </svg>
            </div>
            <p className="mt-2 text-gray-600">
              Convert PDFs to editable Word documents
            </p>
          </a>
          <a
            href="#"
            className="backdrop-blur-lg mb-3 rounded-xl bg-white/70 text-left p-4 lg:p-8 hover:-translate-y-2 transition-transform duration-700 border shadow"
          >
            <div className="font-bold flex">
              <span className="">Merge PDF</span>
              <svg
                className="ms-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
              </svg>
            </div>
            <p className="mt-2 text-gray-600">
              Combine multiple PDFs into one unified document
            </p>
          </a>
          <a
            href="#"
            className="backdrop-blur-lg mb-3 rounded-xl bg-white/70 text-left p-4 lg:p-8 hover:-translate-y-2 transition-transform duration-700 border shadow"
          >
            <div className="font-bold flex">
              <span className="">JPG to PDF</span>
              <svg
                className="ms-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
              </svg>
            </div>
            <p className="mt-2 text-gray-600">
              Transform JPG, PNG, BMP, GIF, and TIFF images to PDF
            </p>
          </a>
          <a
            href="#"
            className="backdrop-blur-lg mb-3 rounded-xl bg-white/70 text-left p-4 lg:p-8 hover:-translate-y-2 transition-transform duration-700 border shadow"
          >
            <div className="font-bold flex">
              <span className="">eSign PDF</span>
              <svg
                className="ms-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
              </svg>
            </div>
            <p className="mt-2 text-gray-600">
              Create your signature, sign your PDF and request people to sign
            </p>
          </a>
          <a
            href="#"
            className="backdrop-blur-lg mb-3 rounded-xl bg-white/70 text-left p-4 lg:p-8 hover:-translate-y-2 transition-transform duration-700 border shadow"
          >
            <div className="font-bold flex">
              <span className="">Edit PDF</span>
              <svg
                className="ms-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
              </svg>
            </div>
            <p className="mt-2 text-gray-600">
              Add text, shapes, images and freehand annotations to your PDF
            </p>
          </a>
          <a
            href="#"
            className="backdrop-blur-lg mb-3 rounded-xl bg-white/70 text-left p-4 lg:p-8 hover:-translate-y-2 transition-transform duration-700 border shadow"
          >
            <div className="font-bold flex">
              <span className="">Compress PDF</span>
              <svg
                className="ms-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
              </svg>
            </div>
            <p className="mt-2 text-gray-600">
              Reduce the size of your PDF without losing quality
            </p>
          </a>
        </div>
        <div className="text-center mt-10">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800  rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none"
          >
            See All PDF Tools
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tools;
