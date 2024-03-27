const Converter = () => {
    return (
        <section className='py-24 flex md:flex-row flex-col justify-center items-center gap-5 max-w-screen-xl mx-auto'>

            <img
                loading='lazy'
                src="https://s.smallpdf.com/static/cms/f/102628/300x180/6cee7e6760/0b0040d43c285926eb01.svg"
                alt="PDF To Word"
            />

            <div className='md:text-left text-center'>
                <h2 className=' pb-3 font-bold text-2xl'>
                    How To Convert PDF File to Word Online
                </h2>
                <ol className=' m-0 p-0'>
                    <li className='py-2'>
                        Drag & drop or import your PDF file to our converter.
                    </li>
                    <li className='py-2'>
                        Choose “With OCR” for scanned PDFs—this is a Pro feature.
                    </li>
                    <li className='py-2'>
                        Download or share your converted Word file—done!
                    </li>
                </ol>
            </div>
        </section>
    )
}
export default Converter;