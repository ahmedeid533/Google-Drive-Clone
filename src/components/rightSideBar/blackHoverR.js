import React, { useState } from 'react';
const BlackHoverR = ({ children , content}) => {
	const [hovered, setHovered] = useState(false);

	return (
		<div 
			className="relative cursor-pointer" 
			onMouseEnter={() => setHovered(true)} 
			onMouseLeave={() => setHovered(false)}
		>
			{children}
			{hovered && (
				<div 
					className="absolute top-[101%] transition-opacity font-bold right-[-15%] text-nowrap bg-[#383c3ecc] py-[4px] px-[7px] shadow-lg text-[#f5f5f5] text-[12px] rounded-sm"
					onMouseEnter={() => setHovered(true)} 
					onMouseLeave={() => setHovered(false)}
				>
					{content}
				</div>
			)}
		</div>
	);
};

export default BlackHoverR;
