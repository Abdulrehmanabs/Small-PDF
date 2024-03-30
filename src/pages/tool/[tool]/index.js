import Converter from '@/components/Converter_Page/Converter';
import Features from '@/components/Converter_Page/Features';
import HTFree from '@/components/Converter_Page/HTFree';
import Head from '@/components/Converter_Page/Head';
import OurBusiness from '@/components/Converter_Page/OurBusiness';
import ToolBlog from '@/components/Converter_Page/ToolBlog';
import ToolTips from '@/components/Converter_Page/ToolTips';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Index = () => {
    let router = useRouter();
    // console.log(router.query.tool);
    return (<>
        <div className='pl-4 flex py-2'>
            <Link href="/" className='pr-2 flex items-center hover:underline'>
                <svg className='h-4 mr-1 inline-block' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke="currentColor" d="M14.5 7.23v7.27h-4v-3h-5v3h-4V7.23L8 1.659z"></path></svg>
                Home
            </Link>
            <span className='text-gray-500'>{"/"} {router.query.tool}</span>
        </div>
        <Head tool={router.query.tool}></Head>
        <ToolTips></ToolTips>
        <OurBusiness></OurBusiness>
        <HTFree></HTFree>
        <Features></Features>
        <Converter></Converter>
        <ToolBlog></ToolBlog>

    </>)
}

export default Index