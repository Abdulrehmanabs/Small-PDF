import React from 'react'

const Features = () => {
    let features = [
        {
            title: "Quick Conversion Without Sign-up",
            image: "https://s.smallpdf.com/static/cms/f/102628/48x48/ce1a8c8535/7ca27d0428c9614899dc.svg",
            details: "You don't need an account or share any information with us to convert a PDF to Microsoft Word format. Our converter is free to use for everyone and can process your files in a matter of seconds.",
        },
        {
            title: "Safe Document Processing",
            image: "https://s.smallpdf.com/static/cms/f/102628/48x48/f1e714aece/ce852e16512bd6e094f1.svg",
            details: "We care about file and data privacy. That's why we use TLS connections, are GDPR compliant, and ISO/IEC 27001 certified. All files are deleted from our servers after one hour. Learn more about the privacy here.",
        },
        {
            title: "Convert on Any Operating System",
            image: "https://s.smallpdf.com/static/cms/f/102628/48x48/00dcdafa20/d87ff218f8f01d7b05ef.svg",
            details: "Our PDF converter works on all computers and operating systems including Mac, Windows, and Linux. You can even convert PDF to Word on your iOS or Android smartphone or offline with our desktop app.",
        },
        {
            title: "File Conversion Without Losing Quality",
            image: "https://s.smallpdf.com/static/cms/f/102628/48x48/e08d473729/2e2d4d86b07e272f0e17.svg",
            details: "Converting a PDF to Word may seem tricky, but with the right tool, it's easy as pie. We've partnered with Solid Documents and Abby—the best converters on the market for optimal quality.",
        },
        {
            title: "Scanned PDF to DOCX With OCR",
            image: "https://s.smallpdf.com/static/cms/f/102628/48x48/6bdaecb105/f311159a2781a3cfdfce.svg",
            details: "With our OCR (Optical Character Recognition) technology, we can extract text from a scanned PDF file and convert it to an editable Word document. Test out this Pro feature with a 7-day free trial!",
        },
        {
            title: "Online Conversion of Large Files",
            image: "https://s.smallpdf.com/static/cms/f/102628/48x48/9e118280aa/0b1d8a20e389c1be66e8.svg",
            details: "Our PDF to Word converter can deal with files up to 5 GB in size. Usually, PDF files don't surpass the Megabyte-range, as it's a compressed format. Chances are, our servers can handle anything you throw at them.",
        },
    ]
    return (
        <section className='px-7 py-20 max-w-screen-xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3'>
            {
                features?.map((feature, indx) => {
                    return (
                        <div key={indx} className='text-center px-4 pb-14'>
                            <img
                                className='w-12 h-12 mx-auto'
                                src={feature.image}
                                alt=""
                                width={48}
                                height={48}
                            />
                            <div className=' font-bold m-auto py-3 '>
                                {feature.title}
                            </div>
                            <div className='px-6 m-0 max-w-full'>
                                {feature.details}
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}
export default Features;