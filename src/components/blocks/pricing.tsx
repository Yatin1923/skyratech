import { motion } from "framer-motion";
import { Check } from "lucide-react";
import React from "react";

export default function Pricing() {
  return (
    <motion.div className=" min-h-screen container mx-auto py-20">
      <motion.h4 className=" text-black border-2 w-fit p-2 px-5 rounded-md opacity-90">
        Our Pricing
      </motion.h4>
      <motion.div className="flex items-center mt-10 gap-10">
        <motion.h1 className="text-black text-7xl font-semibold leading-snug w-1/3">
          Affordable Pricing Plans to Meet Your Needs.
        </motion.h1>
        <motion.div className="bg-[#0E0E0E] text-white w-1/3 p-10 rounded-2xl flex flex-col gap-5">
          <motion.h4 className=" border-2 w-fit p-2 px-5 rounded-md opacity-90">
            MONTHLY
          </motion.h4>
          <motion.h4 className="font-bold text-3xl mt-5">
          $199 / <span className="text-xl">Per Month</span> 
          </motion.h4>
          <motion.p className="text-gray-400 mt-5 w-[80%]">
            Let top creative talent come to you by posting your job listing on
            #1 Design Jobs Board.
          </motion.p>
          <motion.ol>
            <motion.li className="flex items-center mt-5 opacity-75"><Check className="pr-2"></Check>Web Development</motion.li>
            <motion.li className="flex items-center mt-5 opacity-75"><Check className="pr-2"></Check>SEO optimization</motion.li>
            <motion.li className="flex items-center mt-5 opacity-75"><Check className="pr-2"></Check>Content Writing</motion.li>
            <motion.li className="flex items-center mt-5 opacity-75"><Check className="pr-2"></Check>Social Media Management</motion.li>
          </motion.ol>
          <motion.div className="text-center">
            <motion.button className=" bg-[#303030] uppercase  font-bold px-5 py-3 rounded-xs mt-5">
              Choose Package
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div className="bg-[#cfcfcf] w-1/3 p-10 rounded-2xl flex flex-col gap-5">
          <motion.h4 className=" border-2 border-[#303030] w-fit p-2 px-5 rounded-md opacity-90">
            YEARLY
          </motion.h4>
          <motion.h4 className="font-bold text-3xl mt-5">
            $399 / <span className="text-xl">Per Year</span> 
          </motion.h4>
          <motion.p className="text-gray-700 mt-5 w-[80%]">
            Let top creative talent come to you by posting your job listing on
            #1 Design Jobs Board.
          </motion.p>
          <motion.ol>
            
            <motion.li className="flex items-center mt-5 opacity-75"><Check className="pr-2"></Check> Web Development</motion.li>
            <motion.li className="flex items-center mt-5 opacity-75"><Check className="pr-2"></Check> SEO optimization</motion.li>
            <motion.li className="flex items-center mt-5 opacity-75"><Check className="pr-2"></Check> Content Writing</motion.li>
            <motion.li className="flex items-center mt-5 opacity-75"><Check className="pr-2"></Check> Social Media Management</motion.li>
          </motion.ol>
          <motion.div className="text-center">
            <motion.button className=" bg-transparent border-2 border-[#303030] uppercase  font-bold px-5 py-3 rounded-sm mt-5">
              Choose Package
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
