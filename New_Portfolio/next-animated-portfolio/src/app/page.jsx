"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MyImage } from "../../public";
import { host } from "@/utils/host";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            src="/hero.png"
            // src={MyImage}
            alt="Hero_Image"
            fill
            className="object-contain"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">{host?.title}</h1>
          {/* DESC */}
          <p className="md:text-xl">{host?.description}</p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <Link
              href="/portfolio"
              className="p-4 rounded-lg ring-1 ring-black bg-black text-white"
            >
              View My Work
            </Link>
            <Link href="/contact" className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
