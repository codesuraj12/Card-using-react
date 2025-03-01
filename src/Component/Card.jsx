import React from 'react'

import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion"

const Card = ({data, reference }) => {
    return (
        <motion.div drag whileDrag={{scale:1.1}} 
        dragElastic= {0.2} 
        dragConstraints={reference} 
        dragTransition={{bounceStiffness:100,  bounceDamping:50}}
        className='relative w-60 h-72 flex-shrink-0 rounded-[45px] bg-slate-900 text-white px-8 py-10 overflow-hidden'>
            <FaFileAlt />
            <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
            <div className='footer absolute bottom-0  w-full   left-0 '>

                <div className='flex items-center justify-between px-8 py-3 mb-3  '>
                    <h5 >{data.filesize} </h5>
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
{data.close ? <IoMdCloseCircle/> : <LuDownload size={10} color='#fff'/> }
                   
                    </span>
                </div>

                {data.tag.isOpen && ( <div className={`tag w-full py-4 ${data.tag.tagColor} flex justify-center items-center`}>
                  <h3 className='text-md font-semibold'> {data.tag.tagTitle}
                    </h3>
                </div>)}
               
            </div>
        </motion.div>
    )
}

export default Card