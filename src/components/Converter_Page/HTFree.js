import React from 'react'

const HTFree = () => {
    let HTFree = [
        {
            image: "https://s.smallpdf.com/static/cms/f/102628/x/3153718e1e/220902_howtopdfie.svg",
            title: "How To Edit a PDF File Online for Free",
            points: [
                "Drop and upload your PDF document into the PDF Editor",
                "Add text, images, and annotations from the Mark up tab",
                "Edit existing text from the Edit tab—this is a Pro feature",
                "Rearrange, extract, and split pages from the Organize tab",
                "Download or export your edited PDF in Word, Excel, JPG, or PPT",
            ]
        }
    ]
    return (
        <section className='max-w-screen-xl m-auto'>
            {
                HTFree.map((item, indx) => {
                    return (
                        <div key={indx} className='md:flex sm:p-10 p-5 bg-[rgb(242,246,255)]'>
                            <div className='md:w-1/3 w-full'>
                                <img
                                    loading='lazy'
                                    src={item.image}
                                    alt={item.title}
                                />
                            </div>
                            <div className='px-10 md:w-2/3 flex flex-col justify-center '>
                                <h2 className='sm:text-4xl text-2xl  pb-4 font-bold '>
                                    {item.title}
                                </h2>
                                {/* <ul> */}
                                {
                                    item.points.map((point, indx) => {
                                        return (
                                            <li key={indx} className='pt-1 font-normal sm:text-lg '>
                                                {point}
                                            </li>
                                        )
                                    })
                                }
                                {/* </ul> */}
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default HTFree