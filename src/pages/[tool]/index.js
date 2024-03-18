"use client"
import { useRouter } from 'next/router';
import React from 'react'

const Index = () => {
    let router = useRouter();
    console.log(router.query.tool);
    return (<div className='text-center p-8'>
        <h1 className='font-bold text-4xl inline-block'>Dynamic Route : </h1>
        <h1 className=' text-6xl inline-block bg-error'>{`  ${router.query.tool}`}</h1>
    </div>)
}

export default Index