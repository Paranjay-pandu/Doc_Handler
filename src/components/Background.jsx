import React from 'react'

const Background = () => {
    return (
        <>
            <div className='fixed z-[2] w-full h-screen'>
                <div className='absolute text-xl font-medium justify-center flex w-full py-20 text-zinc-600'> Documents.</div>
                <h1 className='absolute left-1/2 top-1/2 font-medium -translate-y-[50%] -translate-x-[50%] text-[12vw] tracking-tight leading-none text-zinc-900'>Docs.</h1>
            </div>
        </>
    )
}

export default Background