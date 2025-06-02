import { motion } from 'framer-motion'
import React from 'react'
interface ServiceProps {
  image: string;
  title: string;
  description: string;
}
export default function SingleService(props:ServiceProps) {
  return (
    <motion.div className="flex gap-20 items-center border-t-1 border-t-gray-800 p-20 relative group col-span-12 row-span-1">
    <motion.div className="flex items-center gap-10 w-1/2">
      <motion.img
        src={props.image}
        alt="design"
        className="w-0 h-40 object-cover group-hover:w-60 transition-all duration-500"
      />
      <motion.h1 className="text-4xl uppercase font-bold mb-5">
        {props.title}
      </motion.h1>
    </motion.div>

    <motion.p className="text-gray-400 w-200 group-hover:opacity-0 transition-all duration-500">
      {props.description}
    </motion.p>
  </motion.div>
  )
}
