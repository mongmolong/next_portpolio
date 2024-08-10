"use client"
import { delay, motion } from "framer-motion";

const TestPage = () => {

    const variants = {
        variant1: {
            x: 400,
            y: 200,
            opacity: 0.5,
            transition: {
                duration: 3
            }
        },
        variant2: {
            x: 100,
            y: -100,
            rotation: 90,
        }
    }
    return (

        <div className='h-full flex items-center justify-center'>
            <motion.div
                className="w-96 h-96 bg-red-300 rounded"
                initial={{ x: -100 }}
                variants={variants}
                // animate={{ x: 100, y: 300, opacity: 0.2 }}
                animate= "variant2"
                transition={{ delay: 2, duration: 2 }}
            >Hi!</motion.div>
        </div>
    )
}

export default TestPage;
