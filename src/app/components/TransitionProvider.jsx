"use client";

import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
    const pathName = usePathname();

    return (
        <AnimatePresence mode="wait">
            <div key={pathName} className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100">
                <motion.div className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
                    animate={{ height: "0vh" }}
                    exit={{ height: "140vh" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                />
                <motion.div className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default bg-blue-500 z-50 w-fit h-fit"
                    initial={{ opacity: 1 }}// 애니메이션이 시작되기 전의 초기 상태
                    animate={{ opacity: 0 }}//애니메이션이 진행되는 동안의 상태
                    exit={{ opacity: 0 }}//요소가 DOM에서 제거될 때의 상태
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    {pathName.substring(1)}
                    </motion.div>

                <motion.div className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
                    initial={{ height: "140vh" }}
                    animate={{ height: "0vh", transition: { delay: 0.5 } }}
                />
                <div className="h-24">
                    <Navbar />
                </div>
                <div className="h-[calc(100vh-6rem)]">{children}</div>

            </div>
        </AnimatePresence>
    )
}

export default TransitionProvider;
