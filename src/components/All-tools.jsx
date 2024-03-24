const All_Tools = () => {
  const Convert_and_Compress = [
    { text: "Compress PDF", image: "/tools/compress-pdf.svg", bg: "#F23030" },
    { text: "PDF Converter", image: "/tools/pdf-converter.svg", bg: "#F23030" },
    {
      text: "PDF Scanner",
      image: "/tools/pdf-scanner.svg",
      bg: "#F23030" || "#003CB2",
    },
  ];

  const Organize = [
    {
      text: "Merge PDF",
      image: "/tools/merge-pdf.svg",
      bg: "#F23030" || "#7961F2",
    },
    {
      text: "Split PDF",
      image: "/tools/split-pdf.svg",
      bg: "#F23030" || "#7961F2",
    },
    {
      text: "Rotate PDF",
      image: "/tools/rotate-pdf.svg",
      bg: "#F23030" || "#7961F2",
    },
    {
      text: "Delete Pages",
      image: "/tools/delete-pdf-pages.svg",
      bg: "#F23030" || "#7961F2",
    },
    {
      text: "Extract Pages",
      image: "/tools/extract-pdf-pages.svg",
      bg: "#F23030" || "#7961F2",
    },
  ];

  const View_and_Edit = [
    {
      text: "Edit PDF",
      image: "/tools/edit-pdf.svg",
      bg: "#F23030" || "#0FC0C5",
    },
    {
      text: "PDF Reader",
      image: "/tools/pdf-reader.svg",
      bg: "#F23030" || "#0FC0C5",
    },
    {
      text: "Number Pages",
      image: "/tools/number-pages.svg",
      bg: "#F23030" || "#0FC0C5",
    },
    {
      text: "AI Summarizer",
      image: "/tools/ai-pdf-summarizer.svg",
      bg: "#F23030" || "#0FC0C5",
    },
  ];

  const Convert_PDF = [
    {
      text: "PDF to Word",
      image: "/tools/pdf-to-word-to-pdf.svg",
      bg: "#F23030" || "#3D99F5",
    },
    {
      text: "PDF to Excel",
      image: "/tools/pdf-to-excel-to-pdf.svg",
      bg: "#F23030" || "#0C4",
    },
    {
      text: "PDF to PPT",
      image: "/tools/pdf-to-ppt-to-pdf.svg",
      bg: "#F23030" || "#FF8000",
    },
    {
      text: "PDF to JPG",
      image: "/tools/pdf-to-jpg-to-pdf.svg",
      bg: "#F23030" || "#FFB700",
    },
  ];

  const Sign_and_Security = [
    {
      text: "eSign PDF",
      image: "/tools/esign-pdf.svg",
      bg: "#F23030" || "#E667E6",
    },
    {
      text: "Unlock PDF",
      image: "/tools/unlock-pdf.svg",
      bg: "#F23030" || "#FF5975",
    },
    {
      text: "Protect PDF",
      image: "/tools/protect-pdf.svg",
      bg: "#F23030" || "#FF5975",
    },
    {
      text: "Flatten PDF",
      image: "/tools/flatten-pdf.svg",
      bg: "#F23030" || "#FF5975",
    },
  ];

  return (
    <div className="border-gray-400 border-t-[1px] mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 xl:px-10">
      {/* Convert & Compress */}
      <div>
        <h2 className="mt-4 mb-2 font-medium xl:mb-4 ">Convert & Compress</h2>
        <div className="text-gray-500">
          <ul className="space-y-3">
            {Convert_and_Compress.map((item) => {
              return (
                <li
                  className={`hover:bg-[${item.bg}] hover:text-white hover:font-semibold rounded `}
                >
                  <a
                    className="flex w-[100%]  px-2 py-1"
                    href={"/tool/" + item.text}
                  >
                    <img
                      className="w-[25px] me-2"
                      src={item.image}
                      alt={item.text}
                    />
                    {item.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* Organize */}
      <div>
        <h2 className="mt-4 mb-2 font-medium xl:mb-4 ">Organize</h2>
        <div className="text-gray-500">
          <ul className="space-y-3">
            {Organize.map((item) => {
              return (
                <li
                  className={`hover:bg-[${item.bg}] hover:text-white hover:font-semibold rounded `}
                >
                  <a
                    className="flex w-[100%]  px-2 py-1"
                    href={"/tool/" + item.text}
                  >
                    <img
                      className="w-[25px] me-2"
                      src={item.image}
                      alt={item.text}
                    />
                    {item.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* View & Edit */}
      <div>
        <h2 className="mt-4 mb-2 font-medium xl:mb-4 ">View & Edit</h2>
        <div className="text-gray-500">
          <ul className="space-y-3">
            {View_and_Edit.map((item) => {
              return (
                <li
                  // style={{ background: item.bg }}
                  className={`hover:bg-[${item.bg}] hover:text-white hover:font-semibold rounded `}
                >
                  <a
                    className="flex w-[100%]  px-2 py-1"
                    href={"/tool/" + item.text}
                  >
                    <img
                      className="w-[25px] me-2"
                      src={item.image}
                      alt={item.text}
                    />
                    {item.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* Convert from PDF */}
      <div>
        <h2 className="mt-4 mb-2 font-medium xl:mb-4 ">Convert from PDF</h2>
        <div className="text-gray-500">
          <ul className="space-y-3">
            {Convert_PDF.map((item) => {
              return (
                <li
                  className={`hover:bg-[${item.bg}] hover:text-white hover:font-semibold rounded `}
                >
                  <a
                    className="flex w-[100%]  px-2 py-1"
                    href={"/tool/" + item.text}
                  >
                    <img
                      className="w-[25px] me-2"
                      src={item.image}
                      alt={item.text}
                    />
                    {item.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* Convert to PDF */}
      <div>
        <h2 className="mt-4 mb-2 font-medium xl:mb-4 ">Convert to PDF</h2>
        <div className="text-gray-500">
          <ul className="space-y-3">
            {Convert_PDF.concat({
              text: "PDF OCR",
              image: "/tools/pdf-ocr.svg",
              bg: "#F23030",
            }).map((item) => {
              return (
                <li
                  className={`hover:bg-[${item.bg}] hover:text-white hover:font-semibold rounded `}
                >
                  <a
                    className="flex w-[100%]  px-2 py-1"
                    href={"/tool/" + item.text.split(" ").reverse().join(" ")}
                  >
                    <img
                      className="w-[25px] me-2"
                      src={item.image}
                      alt={item.text.split(" ").reverse().join(" ")}
                    />
                    {item.text.split(" ").reverse().join(" ")}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* Sign & Security */}
      <div>
        <h2 className="mt-4 mb-2 font-medium xl:mb-4 ">Sign & Security</h2>
        <div className="text-gray-500">
          <ul className="space-y-3">
            {Sign_and_Security.map((item) => {
              return (
                <li
                  className={`hover:bg-[${item.bg}] hover:text-white hover:font-semibold rounded `}
                >
                  <a
                    className="flex w-[100%]  px-2 py-1"
                    href={"/tool/" + item.text}
                  >
                    <img
                      className="w-[25px] me-2"
                      src={item.image}
                      alt={item.text}
                    />
                    {item.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* ---------------- */}
    </div>
  );
};

export default All_Tools;
