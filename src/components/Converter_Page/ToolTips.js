const ToolTips = () => {
    let Tips = [
        {
            title: "Powerful Online PDF Editing—Totally Simple",
            details: "When we say ‘edit,’ we really mean ‘edit.’ Add new text, edit existing text, highlight, draw, insert shapes and images—whatever you need, we’ve got it. So simple to use, no setup or onboarding needed. Get started right away.",
            image: "https://s.smallpdf.com/static/cms/f/102628/x/04af948243/220905_powerfulediting.svg",
        },
        {
            title: "PDF Organization at a Glance",
            details: "Use the Organize mode to rearrange, merge, extract, split, and more. With a host of file-type export options, save your document in any format you like. You can even compress or flatten your PDF—your document, your way.",
            image: "https://s.smallpdf.com/static/cms/f/102628/x/83feeb6ff9/220905_easyeditor.svg",
        },
        {
            title: "Quick to Save, Easy to Share your PDFs",
            details: "Done making magic and editing your PDF? Simply save your edited file to Smallpdf, your device, or any of our connected apps, such as Dropbox or G Suite, or share it with a quick download link.",
            image: "https://s.smallpdf.com/static/cms/f/102628/x/948155a682/220902_easysharing.svg",
        },
    ]
    return <section>
        <div className='m-auto text-center px-6 pt-8'>
            <h2 className='md:text-4xl text-2xl font-bold'>Edit Your PDFs Online—The Easy Way</h2>
            <p className='max-w-[600px] mx-auto pt-4 text-lg'>Editing a PDF shouldn’t be complicated and expensive. That’s why we simplified it. Our PDF editor lets you edit PDF files any way you want—easily in your browser.</p>
        </div>
        {
            Tips.map((Tip, indx) => {
                return <div key={indx} className='max-w-screen-xl m-auto grid grid-cols-1 md:grid-cols-2'>
                    <div
                        className={`sm:p-10 p-6  ${indx === 0 || indx === 2 ? "md:order-2" : "md:order-1"} `}
                    >
                        <img
                            loading='lazy'
                            src={Tip.image}
                            alt={Tip.title}
                        />
                    </div>
                    <div
                        className={`sm:p-10 p-6 flex flex-col justify-center md:order-1`}
                    >
                        <h3 className='md:text-3xl text-2xl font-bold pb-4'>{Tip.title}</h3>
                        <p className='text-lg '>
                            {Tip.details}
                        </p>
                    </div>
                </div>

            })
        }

    </section>
}

export default ToolTips