"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import HeroImage from '@/public/images/hero-image.png';
import Vector from '@/public/images/vector.png';
import Button from '../button/button';
import { heroContent } from '@/app/lib/constants';

const Hero = () => {
	const { heading, content, image } = heroContent;
	
	return (
		<section className="hero h-[80vh] sm:h-[90vh] xl:h-[94vh] text-white before:block before:absolute before:w-full before:h-full before:-z-20 before:bg-black/40 relative z-40 overflow-hidden">
			<Image 
				src={HeroImage}
				alt="hero image"
				className='-z-30'
				fill
			/>
			<div className="wrapper mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[73%,max-content] pt-28 xs:pt-32 md:pt-36 w-[93%] xs:w-11/12 phone-sm:w-[83%] md:w-[78%] md-xl:w-3/4 lg:pl-44 lg:w-11/12 xl:pl-24 xl:pt-44 xl:w-10/12 gap-x-14">
				<div className="content flex flex-col text-center items-center lg:items-start lg:text-left gap-y-3.5 sm:pt-8 md:pt-0 lg:pt-8 font-geologica">
					<motion.h1 
						className="font-extrabold font-syne text-[1.7rem] leading-[1.1] xxs:text-[2.22rem] xs:leading-[1.2]  phone-sm:text-4xl sm:text-5xl sm-md:text-[3.2rem] md:text-[3.1rem] tracking-tighter sm:leading-[1.1] md-lg:text-5.6xl lg:text-5xl xl:text-5.6xl"
						initial={{ x: -100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ type: "spring", delay: .35, duration: .3 }}
					>
						{heading}
					</motion.h1>
					<motion.p 
						className="text-white/95 w-full text-[.97rem] xxs:text-base xs:text-[1.02rem] sm:text-[1.16rem] tracking-normal md:text-[1.16rem] md-lg:text-[1.18rem] lg:[1.08rem] xl:text-[1.1rem] sm:w-[87%] md:w-[84%] md-lg:w-10/12 lg:w-4/5 leading-normal md-xl:leading-relaxed"
						initial={{ x: -50, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ type: "spring", delay: .45, duration: .35 }}
					>
						{content}
					</motion.p>
					<Button 
                        variant="primary" 
                        styles="mt-2 sm:mt-3 md:mt-5"
                    >Learn more</Button>
				</div>		
			</div>

			{/* Hero image gradient */}
			<figure className='w-[300px] h-[228px] top-[90%] left-[0] xxs:w-[380px] xxs:h-[291px] xxs:top-[75%] xss:-left-[3%] xs:w-[380px] xs:h-[292px] phone-sm:w-[420px] phone-sm:h-[321px] xs:top-[78%] xs:left-[10%] sm:top-[72%] sm:-left-[32%] md:top-[67%] md:-left-[30%] lg:w-[438px] lg:h-[335px] xl:w-[458px] xl:h-[350.97px] absolute lg:-left-[25%] lg:top-[30%] -z-10'> 
				<Image 
					src={Vector}
					alt="vector"
					className='w-full h-full object-cover'
					priority 
				/>
			</figure>
		</section>
	)
}

export default Hero;