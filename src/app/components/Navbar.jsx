'use client'
import Link from "next/link"
import { useState } from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import { motion, stagger } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portpolio", title: "Portpolio" },
  { url: "/contact", title: "Contact" },
];

const navbar = () => {
  const [open, setOpen] = useState(false);
  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)"
    }
  }
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    }
  }
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: - 45,
      backgroundColor: "rgb(255,255,255)"
    }
  }
  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition :{
        when:"beforeChildren",
        staggerChildren : 0.2,
      }
    }
  }
  const listItemVariants ={
    closed :{
      x: -10,
      opacity :0,
    },
    opened :{
      x : 0,
      opacity: 1,
    }
  }

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* Links */}
      <div className="hidden md:flex gap-8 xl:w-1/3">
        {links.map((link) => (
          // <Link href={link.url} key={link.title}>{link.title}</Link>
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* logo */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center" >
          <span className="text-white mr-1">Park</span>
          <span className="w-12 h-8 rounded bg-white text-black flex justify-center items-center">.Mong</span>
        </Link>
      </div>
      {/* sns */}
      <div className="hidden md:flex gap-4 xl:w-1/3 ">
        <Link href="#">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/dribbble.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/facebook.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/pinterest.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
      </div>

      <div className="md:hidden">
        {/* menu button */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={() => {
            setOpen((prev) => !prev)
          }}>
          <motion.div variants={topVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-white rounded origin-left" ></motion.div>
          <motion.div variants={centerVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-white rounded"></motion.div>
          <motion.div variants={bottomVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-white rounded origin-left "></motion.div>
        </button>
        {open && (
          <motion.div variants={listVariants} initial="closed" animate="opened"
            className="z-30 absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
            {links.map((link) => (
              <motion.div variants={listItemVariants} key={link.title} >
                <Link href={link.url} >
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default navbar
