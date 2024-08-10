"use client"
import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div className="h-full" initial={{ y: "-100vh" }} animate={{ y: 0 }} transition={{ duration: 1 }}>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* image */}
        <div className="h-1/2 relative lg:h-full lg:w-1/2">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* text */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold">Lorem ipsum dolor sit amet.</h1>
          <p className="md:text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto laborum, corrupti vero illo iure, cum aspernatur impedit et amet consequatur deserunt molestiae accusamus excepturi.</p>
          {/* buttons */}
          <div className="flex gap-4" >
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work</button>
            <button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button>
          </div>
        </div>
      </div>
    </motion.div>
  )
};

export default Homepage;
