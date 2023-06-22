'use client'

import React, { useState, useEffect, useRef, MutableRefObject } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavigationLink from './navigation-link';
import { AiOutlineBars } from 'react-icons/ai'; 
import { navigationLinks } from '@/app/lib/constants';
import Favicon from '@/public/images/favicon.png';
import FaviconPhone from "@/public/images/favicon-large.png";
import Button from '../button/button';


type Props = {
	showLinks?: boolean;
	scrollPositionProp?: boolean;
	border?: boolean
}

const Navigation = ({ showLinks=true, border=false, scrollPositionProp }: Props) => {
	const [isActive, setIsActive] = useState<boolean>(false);
	const [isOffsetOpen, setIsOffsetOpen] = useState<boolean>(false);
	const [scrollPosition, setScrollPosition] = useState<number>(5);
	const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
	const navigationRef: MutableRefObject<null | any> = useRef(null);
 
	useEffect(() => {
		// Set scroll position
		if(!scrollPositionProp)
			setScrollPosition(70);
			

		window.addEventListener("scroll", checkNavScrollPosition);

		return () => {
			window.removeEventListener("scroll", checkNavScrollPosition); 
		}
	}, [scrollPositionProp]);

	function checkNavScrollPosition(e: Event) {
		const { scrollY } = window;

		if(scrollY >= scrollPosition)
			setIsActive(true)
		else
			setIsActive(false);
	}

	useEffect(() => {
		window.addEventListener("mouseover", onHoverHandler)

		return () => window.removeEventListener("mouseover", onHoverHandler);
	});

	function onHoverHandler(e: Event) {			
		if(isDropdownOpen && !navigationRef?.current.contains(e.target))
			setIsDropdownOpen(false);
	}

	return (
		<nav className={`navigation w-full flex justify-center z-50 fixed top-0 left-0 sm:px-2 sm:py-4 md:py-2.5 py-3.5 ${border ? "border-b border-tertiary-700" : ""} ${isActive ? "bg-clip-padding backdrop-filter border-tertiary-shade-900/40 backdrop-blur-xl bg-opacity-60 bg-[linear-gradient(180deg,_#114158 0%,_rgba(17,_65,_88,_0.8)_42.19%,_rgba(17,_65,_88,_0.3)_100%)] md:py-4 md:px-8" : ""}`}>
			<div className="wrapper flex justify-between items-center text-white rounded-lg transition-all duration-300 w-11/12 sm:w-[85%] md:w-10/12">			
				<Link 
					href="/" 
					className={`${isActive ? "h-10 w-10 xs:ml-0 xs:w-[7.5rem] xs:h-[2.2rem] sm:h-9 sm:w-[6.6rem] md:w-32 md:h-10" : "h-9 w-[2.6rem] xxs:w-10 xxs:h-10 md:w-36 md:h-12"} ml-2 xs:ml-0 font-extrabold uppercase`}
					onClick={() => window.scrollTo({
						top: 0,
						behavior: 'smooth',
					})}
				>
					<Image 
						src={Favicon}
						alt="favicon"
						className="hidden xs:inline-block w-full h-full object-cover"
					/>

					<Image 
						src={FaviconPhone}
						alt="favicon"
						className="inline-block xs:hidden w-full h-full object-cover"
					/>
				</Link>

				{/* Navigation Actions */}
				<div className='nav-r flex items-center gap-x-4 sm:gap-x-5 md:gap-x-6'>
					{showLinks ? (
						<>
							{/* Hamburger */}
							<span 
								className="phone:hidden cursor-pointer order-2 xs:order-1"
								onClick={() => setIsOffsetOpen(props => !props)}
							>
								<AiOutlineBars className="text-3xl" />
							</span>

							{/* Navigation Link */}
							<ul className="navigation-items hidden phone:flex items-center gap-x-5 md:gap-x-6" ref={navigationRef}>
								{navigationLinks.map(link => (
									<NavigationLink 
										key={link.name}
										{...link}
									/>
								))}
							</ul>
						</>
					) : null}

					{/* Wallet button */}
					<Button role="connect wallet" variant='primary'>Connect wallet</Button>
				</div>
			</div>
		</nav>
	)
}

export default Navigation;
