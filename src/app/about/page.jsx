"use client"
import { easeInOut, motion, useInView, useScroll } from "framer-motion"
import { useRef } from "react";
import { TfiMouse } from "react-icons/tfi";

const About = () => {
  // const {scrollYProgress}  = useScroll({container:containerRef}) //for brain

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef,{once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  // const mouseRef = useRef();
  // const isMouseRefInview = useInView(mouseRef, { margin: "-100px" });


  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      {/* <div className="h-full overflow-scroll lg:flex" ref={containerRef}> */}
      <div className="h-full overflow-scroll lg:flex">

        {/* container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          {/* text */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl ">BIOGRAHPY</h1>
            <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sed corporis eligendi soluta dolore laborum. Velit, doloremque nisi repellendus voluptatum non veniam fugit illo! Velit atque nobis ipsum beatae autem?</p>
            <span className="italic">Lorem, ipsum dolor.</span>
            <div className=""> signiture</div>
            <motion.div className="text-4xl"
              initial={{ opacity: 0.2, y: "0px" }} animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}>
              <TfiMouse />
            </motion.div>
          </div>

          {/* skill */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1 className="font-bold text-2xl"
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}>SKILLS</motion.h1>
            <motion.div className="flex gap-4 flex-wrap"
              initial={{ x: "-100px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}>
              <div className="rounded p-2 cursor-pointer bg-black text-white hover:bg-white hover:text-black">HTML5</div>
              <div className="rounded p-2 cursor-pointer bg-black text-white hover:bg-white hover:text-black">CSS3</div>
              <div className="rounded p-2 cursor-pointer bg-black text-white hover:bg-white hover:text-black">Tailwind css</div>
              <div className="rounded p-2 cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</div>
              <div className="rounded p-2 cursor-pointer bg-black text-white hover:bg-white hover:text-black">Jquery</div>
              <div className="rounded p-2 cursor-pointer bg-black text-white hover:bg-white hover:text-black">React</div>
              <div className="rounded p-2 cursor-pointer bg-black text-white hover:bg-white hover:text-black">Vue</div>
              <div className="rounded p-2 cursor-pointer bg-black text-white hover:bg-white hover:text-black">Next.js</div>
              <div className="rounded p-2 cursor-pointer bg-black text-white hover:bg-white hover:text-black">Photoshop</div>
              <div className="rounded p-2 cursor-pointer bg-black text-white hover:bg-white hover:text-black">Illostrator</div>
              <div className="rounded p-2 cursor-pointer bg-black text-white hover:bg-white hover:text-black">Figma</div>
              <div className="rounded p-2 cursor-pointer bg-black text-white hover:bg-white hover:text-black">Github</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0.2, y: "0" }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="text-4xl">
              <TfiMouse />
            </motion.div>
          </div>

          {/* experience */}
          <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl ">EXPERIENCE</motion.h1>

            <motion.div initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}>
              {/* 첫번째 */}
              <div className="flex justify-between h-48 ">
                {/* left */}
                <div className="w-1/3">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">title</div>
                  <div className="p-3 text-sm  italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, facilis.</div>
                  <div className="p-3 text-red-400 text-sm font-semibold">2024</div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">더조은</div>
                </div>
                {/* center */}
                <div className="w-1/6 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3"></div>
              </div>

              {/* 두번째 */}
              <div className="flex justify-between h-48 ">
                {/* left */}
                <div className="w-1/3">
                </div>
                {/* center */}
                <div className="w-1/6 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">title</div>
                  <div className="p-3 text-sm  italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, facilis.</div>
                  <div className="p-3 text-red-400 text-sm font-semibold">2024</div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">더조은</div>
                </div>
              </div>

              {/* 세번째 */}
              <div className="flex justify-between h-48 ">
                {/* left */}
                <div className="w-1/3">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">title</div>
                  <div className="p-3 text-sm  italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, facilis.</div>
                  <div className="p-3 text-red-400 text-sm font-semibold">2024</div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">더조은</div>
                </div>
                {/* center */}
                <div className="w-1/6 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3"></div>
              </div>
            </motion.div>

          </div>

        </div>
          {/* 이미지 */}
          <div className="hidden lg:block w-1/3 xl:1/2 bg-blue-200">Text</div>
      </div>
    </motion.div >
  )
}

export default About
