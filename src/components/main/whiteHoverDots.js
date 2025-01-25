import React, { useState } from 'react';
const WhiteHoverDots = ({ children, content = "" }) => {
	const [hovered, setHovered] = useState(false);

	return (
		<div 
			className="relative cursor-pointer" 
			onMouseEnter={() => setHovered(true)} 
			onMouseLeave={() => setHovered(false)}
		>
			{children}
			{hovered && content !== "" && (
				<div className="absolute z-40 top-[110%] right-[30%] translate-x-[0%] text-nowrap bg-[#e3e3e3] text-gray-900 py-[5px] px-[8px] shadow-lg text-[12px] rounded-sm">
					{content}
				</div>
			)}
		</div>
	);
};

export default WhiteHoverDots;