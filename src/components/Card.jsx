import React from 'react'
import { TiDownload } from "react-icons/ti";
import { FaFileLines } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({ data, r }) => {
    const color = data.tag.color
    return (
        <motion.div dragSnapToOrigin={true} dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }} dragConstraints={r} drag="x" dragMomentum={true} whileDrag={{ scale: 1.05 }} className='w-52 h-64 bg-zinc-900/90 relative rounded-[30px] overflow-hidden p-5 pt-7 text-white'>
            <FaFileLines />
            <p className='pt-3 leading-tight text-sm text-left'>{data.desc}</p>
            <div className='w-full footer absolute bottom-0 left-0'>
                <div className='flex justify-between px-5 py-2 align-middle mb-2'>
                    <h1 className='text-md'>{data.size}</h1>
                    <div className='py-1'>
                        {data.download ? <TiDownload /> : <IoClose />}
                    </div>
                </div>
                {
                    data.tag.show && (
                        <div className={`bg-green-700 w-full py-1`}>
                            <h2 className='text-sm text-center my-2'>{data.tag.title}</h2>
                        </div>
                    )
                }
            </div>
        </motion.div>
    )
}

export default Card