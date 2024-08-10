"use client"
import { motion } from "framer-motion"

const Portpolio = () => {
  return (
    <motion.div className="h-full" initial={{ y: "-100vh" }} animate={{ y: "0" }} transition={{ duration: 1 }}>
      Portpolio
    </motion.div>
  )
}

export default Portpolio
