import { motion } from "framer-motion";
import React from "react";

export default function Footer() {
  return (
    <motion.div className='bg-[url("/images/footer-img.jpg")]'>
      <motion.div className="container mx-auto py-30 flex justify-between gap-10">
        <motion.div className="w-1/3">
          <motion.h1 className="text-3xl mb-10">Skyratech.</motion.h1>
          <motion.h1 className="text-md mb-3 opacity-40">
            Welcome to our world of endless imagination and boundless
            creativity. Together, let's embark on a remarkable journey where
            dreams become tangible realities.
          </motion.h1>
        </motion.div>
        <motion.div className="w-1/3">
          <motion.h1 className="text-3xl mb-10">Contact Info</motion.h1>
          <motion.h1 className="text-md mb-3 opacity-40">
            skyratechsolutions@gmail.com
          </motion.h1>
          <motion.h1 className="text-md opacity-40">+09106002747</motion.h1>
        </motion.div>
        <motion.div className="w-1/3">
          <motion.h1 className="text-3xl mb-10">Subscribe Newsletter</motion.h1>
          <motion.p className="text-md mb-3 opacity-40">
            Subscribe our newsletter for future updates. don’t worry we don’t
            spam your email address
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
