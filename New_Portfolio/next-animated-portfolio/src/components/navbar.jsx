"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";
import { links } from "@/utils/navlinks";
import { host } from "@/utils/host";
import { Social } from "@/utils/social";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const topVariants = {
		closed: {
			rotate: 0,
		},
		opened: {
			rotate: 45,
			backgroundColor: "rgb(255,255,255)",
		},
	};
	const centerVariants = {
		closed: {
			opacity: 1,
		},
		opened: {
			opacity: 0,
		},
	};

	const bottomVariants = {
		closed: {
			rotate: 0,
		},
		opened: {
			rotate: -45,
			backgroundColor: "rgb(255,255,255)",
		},
	};

	const listVariants = {
		closed: {
			x: "100vw",
		},
		opened: {
			x: 0,
			transition: {
				when: "beforeChildren",
				staggerChildren: 0.2,
			},
		},
	};

	const listItemVariants = {
		closed: {
			x: -10,
			opacity: 0,
		},
		opened: {
			x: 0,
			opacity: 1,
		},
	};

	return (
		<div className='flex items-center justify-between h-full px-4 text-xl sm:px-8 md:px-12 lg:px-20 xl:px-48'>
			{/* LINKS */}
			<div className='hidden w-1/3 gap-4 md:flex'>
				{links?.map((link) => (
					<NavLink link={link} key={link?.title} />
				))}
			</div>
			{/* LOGO */}
			<div className='md:hidden lg:flex xl:w-1/3 xl:justify-center'>
				<Link
					href='/'
					className='flex items-center justify-center p-1 text-sm font-semibold bg-black rounded-md'>
					<span className='mr-1 text-white'>{host.name.split()}</span>
					<span className='flex items-center justify-center w-12 h-8 text-black bg-white rounded'>
						.dev
					</span>
				</Link>
			</div>
			{/* SOCIAL */}
			<div className='hidden w-1/3 gap-4 md:flex'>
				{Social?.map((value, key) => {
					return (
						<>
              <Link key={key} href={value?.link} target="_blank">
								<Image src={value?.src} alt={value?.alt} width={value.width} height={value.height} />
							</Link>
						</>
					);
				})}
			</div>
			{/* RESPONSIVE MENU */}
			<div className='md:hidden'>
				{/* MENU BUTTON */}
				<button
					className='relative z-50 flex flex-col justify-between w-10 h-8'
					onClick={() => setOpen(!open)}>
					<motion.div
						variants={topVariants}
						animate={open ? "opened" : "closed"}
						className='w-10 h-1 origin-left bg-black rounded'></motion.div>
					<motion.div
						variants={centerVariants}
						animate={open ? "opened" : "closed"}
						className='w-10 h-1 bg-black rounded'></motion.div>
					<motion.div
						variants={bottomVariants}
						animate={open ? "opened" : "closed"}
						className='w-10 h-1 origin-left bg-black rounded'></motion.div>
				</button>
				{/* MENU LIST */}
				{open && (
					<motion.div
						variants={listVariants}
						initial='closed'
						animate='opened'
						className='absolute top-0 left-0 z-40 flex flex-col items-center justify-center w-screen h-screen gap-8 text-4xl text-white bg-black'>
						{links?.map((link) => (
							<motion.div
								variants={listItemVariants}
								className=''
								key={link.title}>
								<Link href={link.url}>{link.title}</Link>
							</motion.div>
						))}
					</motion.div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
