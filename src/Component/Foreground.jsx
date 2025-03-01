import React, { useRef, useState } from 'react'
import Card from './Card'


const Foreground = () => {

const ref = useRef(null)

const data = [
  {
  desc:"lorem5 gg Lorem ipsum dolor sit amet consectetur.",
  filesize : '.9mb',
  close: false,
  tag: {isOpen: true, tagTitle: 'Download Now', tagColor: 'bg-green-600'},
},
  {
  desc:"lorem5 gg Lorem ipsum dolor sit amet consectetur.",
  filesize : '.9mb',
  close: true,
  tag: {isOpen: true, tagTitle: 'Download Now', tagColor: 'bg-blue-600'},
},
  {
  desc:"lorem5 gg Lorem ipsum dolor sit amet consectetur.",
  filesize : '.9mb',
  close: true,
  tag: {isOpen: false, tagTitle: 'Download Now', tagColor: 'bg-green-600'},
},
]

  return (
   <>
    <div ref={ref} className='w-full h-full fixed  top-0 left-0 z-[3] flex gap-6 flex-wrap p-5'>
    

 {
  data.map((item, index)=>(
    <Card data= {item} reference = {ref}/>
  ))
 }
    </div>
   
   </>
  )
}

export default Foreground