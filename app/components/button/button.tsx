import React, { ReactNode } from 'react';

type Props = {
	type?: "button" | "submit";
	role?: string;
	styles?: string;
	variant?: "primary" | "text-primary" | "transparent" | "border" | "accent" | "accent-border";
	onClick?: () => void;
	children: ReactNode;
	disabled?: boolean,
	title?: string
}

const Button = ({ type="button", role="button", styles="", variant="primary", onClick, children, disabled, title }: Props) => {
	let variantStyle;

	if(variant === "primary")
		variantStyle = "py-[.4rem] px-4 sm:py-2 md:px-4 lg:px-[16px] bg-tertiary-900 text-white hover:bg-tertiary-tint-800 disabled:hover:bg-tertiary-900 focus:bg-tertiary-tint-800 disabled:focus:bg-tertiary-900";
	else if(variant === "accent") 
		variantStyle = "py-[.4rem] px-4 sm:py-2 md:px-4 lg:px-[16px] bg-accent-shade-800 text-black hover:bg-accent-tint-800 focus:bg-accent-shade-300 disabled:hover:bg-accent-shade-800 disabled:focus:bg-accent-shade-800";
	else if(variant === "text-primary") 
		variantStyle = "bg-transparent text-tertiary-900";
	else if(variant === "border")
		variantStyle = "py-1.5 md:py-2 px-4 sm:px-6 md:px-4 lg:px-[29px] border border-tertiary-900 text-tertiary-900 hover:bg-tertiary-900 hover:text-white focus:text-white focus:bg-tertiary-900";
	else if(variant === "accent-border")
		variantStyle = "py-1.5 md:py-2 px-4 sm:px-6 md:px-4 lg:px-[29px] border border-accent-shade-800 text-accent-shade-800";	
	else if(variant === "transparent")
		variantStyle = "bg-transparent text-gray-900";

	return (
		<button 
			className={`${styles} ${variantStyle} flex items-center justify-center gap-x-1 truncate w-[max-content] cursor-pointer text-sm md:text-sm font-inherit rounded-lg transition-colors duration-300 disabled:opacity-90 disabled:cursor-not-allowed`}
			role={role}
			title={title}
			aria-disabled={disabled}
			disabled={disabled}
			aria-label={role}
			onClick={onClick}
		>
			{children}
		</button>
	)
}


export default Button;