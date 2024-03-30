const Head = ({ tool }) => {
    let points = [
        "For Mac, Windows, Linux, iOS, and Android",
        "Turn your PDF into an editable Word file",
        "We can also convert scanned PDFs to Word",
    ]
    return (
        <section className='px-4'>
            <div className='mx-auto max-w-screen-xl'>
                <div className='w-full flex flex-col justify-center items-center'>
                    <h1 className='text-4xl font-bold text-center pb-8 pt-2'>
                        {tool}
                    </h1>
                </div>
                <div
                    className={`rounded 
                        ${tool?.includes("Word") ? "bg-blue-500" : tool?.includes("Scanner") ? "bg-blue-800" :
                            tool?.includes("OCR") || tool?.includes("Convertor") || tool?.includes("Compresor") || tool?.includes("Compress") ? "bg-red-500" :
                                tool?.includes("Merge") || tool?.includes("Split") || tool?.includes("Rotate") || tool?.includes("Delete") || tool?.includes("Extract") ? "bg-[#7961F2]" :
                                    tool?.includes("AI") || tool?.includes("Number") || tool?.includes("Reader") || tool?.includes("Edit") ? "bg-[#0FC0C5]" :
                                        tool?.includes("eSign") ? "bg-purple-400" :
                                            tool?.includes("Excel") ? "bg-green-500" :
                                                tool?.includes("PPT") ? "bg-orange-500" :
                                                    tool?.includes("JPG") ? "bg-yellow-500" :
                                                        tool?.includes("Unlock") || tool?.includes("Protect") || tool?.includes("Flatten") ? "bg-red-400" :
                                                            "bg-gray-500"
                        }
                    `}
                >
                    <div className='flex w-full min-h-[300px]'>
                        <div className=' cursor-pointer w-full'>
                            <label htmlFor="choose-file" className='cursor-pointer'>
                                <input id='choose-file' type="file" className='hidden' multiple />
                                <div className='relative rounded-lg w-full h-full'>
                                    <div className=' absolute inset-[10px] border border-dashed border-white rounded'></div>
                                    <div className='h-full w-full flex flex-col items-center justify-center'>
                                        <div className='h-16 w-24 pb-5 cursor-pointer'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 96 60" ><path d="m56.936.888 30.189 1.054 7.998 8.577-1.473 42.182a2.5 2.5 0 0 1-2.421 2.411h-.165L69 54.341V58a2 2 0 0 1-2 2H31a2 2 0 0 1-2-2v-3.731l-24.064.84a2.5 2.5 0 0 1-2.575-2.247l-.011-.164L.675 4.728a2.5 2.5 0 0 1 2.247-2.575l.164-.011 30.189-1.054 7.242 6.753-.149.159h13.817l.165-4.7A2.5 2.5 0 0 1 56.771.887zM59.999 9H31a1 1 0 0 0-.993.883L30 10v29h20a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H30v6a1 1 0 0 0 .883.993L31 59h36a1 1 0 0 0 .993-.883L68 58V17h-8zm-3.098-7.113a1.5 1.5 0 0 0-1.54 1.303l-.012.144L55.186 8H61l8 8v9.629a10.46 10.46 0 0 1 5.122-1.13c5.796.202 10.33 5.064 10.127 10.86s-5.064 10.329-10.86 10.126a10.5 10.5 0 0 1-4.39-1.13v8.986l22.1.772a1.5 1.5 0 0 0 1.54-1.303l.012-.144 1.428-40.975-7.493-.262-1-.035.297-8.496zm-24.799.24L3.121 3.142a1.5 1.5 0 0 0-1.445 1.407l-.002.145 1.675 47.97a1.5 1.5 0 0 0 1.407 1.445l.145.002 24.098-.841V52H28a1 1 0 0 1-1-1v-6.165l-7.405.258v.001l-1 .035-4.996.174-1 .036-.733-20.988L29 23.753V10a2 2 0 0 1 2-2h1.307zM59 50v1h-6v-1zm-26.685-8H30v7h1.303v-2.569h1.057c1.584 0 2.797-.717 2.797-2.269 0-1.627-1.213-2.162-2.842-2.162m6.19 0H36.54v7h2.034c2.18 0 3.506-1.21 3.506-3.532 0-2.312-1.326-3.468-3.573-3.468M48 42h-4.438v7h1.303v-2.922h2.674v-1.049h-2.674v-1.98H48zm-9.584 1.006c1.483 0 2.326.75 2.326 2.462 0 1.654-.777 2.46-2.151 2.522l-.175.004h-.573v-4.988zM59 45v1h-6v-1zm-26.787-2.005c1.09 0 1.663.29 1.663 1.167 0 .806-.467 1.223-1.431 1.27l-.187.004h-.955v-2.44zm36.814-16.244-.028.016v16.45a9.46 9.46 0 0 0 4.425 1.27c4.905.17 9.07-3.408 9.739-8.162l-9.442-.33.366-10.497a9.45 9.45 0 0 0-5.06 1.253M18.42 40.132l-4.997.175.14 3.996 4.997-.174zm8.593-.3-7.593.265.14 3.997 7.438-.26L27 40q0-.086.014-.168M59 40v1h-6v-1zm-40.753-4.865-4.997.175.14 3.997 4.996-.174zm10.752-.376-9.753.341.14 3.998 9.613-.336zM59 35v1H39v-1zm-40.928-4.862-4.997.175.14 3.997 4.997-.174zM29 29.756l-9.927.347.14 3.998L29 33.759zM59 30v1H39v-1zm-41.102-4.859-4.997.175.14 3.997 4.996-.174zm11.101-.387-10.102.353.14 3.997 9.962-.348zm32-15.34V16h6.585zm25.875-6.273-.254 7.289 7.29.254zM33.11 2.3l.2 5.7h5.911z"></path></svg>
                                        </div>
                                        <div className='cursor-pointer'>
                                            <div className='flex mt-4 bg-white rounded overflow-hidden'>
                                                <div className='z-10 flex items-center font-bold p-4 hover:bg-gray-200 '>
                                                    <div className='w-6 h-6 font-bold'>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                d="M13 12v-2h1v2h2v1h-2v2h-1v-2h-2v-1zm5 8H6V4H5v17h13zm1 0v2H4V3h2V1h10l5 5v14zM7 2v17h13V6l-4-4zm9 0 4 4h-4z"
                                                            >
                                                            </path>
                                                        </svg>
                                                    </div>
                                                    <span className='ml-2 whitespace-nowrap font-bold uppercase'>
                                                        Choose Files
                                                    </span>
                                                </div>
                                                <button
                                                    className="z-10 p-4 border-l-2 hover:bg-gray-200"
                                                    onClick={(evt) => {
                                                        console.log("Clicked", evt)
                                                    }}
                                                >
                                                    <svg
                                                        className='w-4'
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path
                                                            d="m13.333 4 1.334 1.333L8 12 1.333 5.333 2.667 4 8 9.5z"
                                                        >
                                                        </path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className='p-3 text-center text-white'>
                                            Or drop files here
                                        </div>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:flex sm:gap-4 mt-10 justify-center'>
                    <p className='pb-6 font-medium'>
                        Convert a PDF to Word online for free. Our converter turns PDFs into editable Word docs in seconds, without losing quality.
                    </p>
                    <ul className='w-full max-w-[400px]'>
                        {
                            points.map((point, indx) => {
                                return <li key={indx} className='pt-0 flex py-2 '>
                                    <div className='pr-2 '>
                                        <div className='w-6 h-6 text-green-400  '>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18m-1.591-6.85 5.728-5.727a.9.9 0 0 1 1.272 1.272l-6.293 6.294a1 1 0 0 1-1.414 0L6.59 12.877a.9.9 0 0 1 1.272-1.272z"
                                                >
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                    {point}
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Head;