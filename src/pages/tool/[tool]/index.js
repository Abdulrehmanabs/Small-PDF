// "use client"
import { useRouter } from 'next/router';
import React from 'react'

const Index = () => {
    let router = useRouter();
    console.log(router.query.tool);
    return (<div className='text-center p-10 sm:p-36'>
        <h1 className='font-bold text-4xl text-red-600 inline-block'>Dynamic Route {"(-_-)"} </h1>
        <pre className='p-4' />
        <span>{router.query?.tool}</span>
        {/* <h1 className=' text-6xl inline-block bg-error'>{router.query?.tool?.split("&&")[0]}</h1>
        <h1 className=' text-6xl inline-block bg-error'>{router.query?.tool?.split("&&")[1]}</h1> */}
    </div>)
}

export default Index