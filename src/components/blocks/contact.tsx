import { motion } from 'framer-motion'
import React from 'react'

export default function ContactUs() {
  return (
    <motion.div className='text-white container mx-auto pt-30'>
        <motion.div>
            <motion.p className='text-5xl uppercase'>Get in touch!</motion.p>
        </motion.div>
        <motion.div className='py-10'>
            <motion.form className='flex flex-col gap-10'>
                <motion.div className='flex gap-5'>
                    <motion.div className='flex flex-col gap-5 w-1/2'>
                        <motion.label>Name</motion.label>
                        <motion.input className='bg-[#1d1d1d] w-full p-5 mb-2 rounded-md' type="text" placeholder='John Smith...'/>
                    </motion.div>
                    <motion.div className='flex  flex-col gap-5 w-1/2'>
                        <motion.label>Your email</motion.label>
                        <motion.input className='bg-[#1d1d1d] w-full p-5 mb-2 rounded-md' type="email" placeholder='Johnsmith@gmail.com...'/>
                    </motion.div>
                </motion.div>
                <motion.div className='flex gap-5'>
                    <motion.div className='flex  flex-col gap-5 w-1/2'>
                        <motion.label>What are you interested in?</motion.label>
                        <motion.input className='bg-[#1d1d1d] w-full p-5 mb-2 rounded-md' type="text" placeholder=''/>
                    </motion.div>
                    <motion.div className='flex  flex-col gap-5 w-1/2'>
                        <motion.label>Project Budget</motion.label>
                        <motion.input className='bg-[#1d1d1d] w-full p-5 mb-2 rounded-md' type="text" placeholder=''/>
                    </motion.div>
                </motion.div>
                <motion.textarea className='bg-[#1d1d1d] w-full p-5 mb-2 rounded-md' placeholder='Message'/>
                <motion.button className='bg-[#1d1d1d] w-full p-5 mb-2 rounded-md max-w-50'>Send</motion.button>
            </motion.form>
        </motion.div>

    </motion.div>
  )
}
