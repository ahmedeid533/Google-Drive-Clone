import React, { useState } from 'react';
const WhiteHover = ({ children, content = "" }) => {
	const [hovered, setHovered] = useState(false);

	return (
		<div 
			className="relative cursor-pointer" 
			onMouseEnter={() => setHovered(true)} 
			onMouseLeave={() => setHovered(false)}
		>
			{children}
			{hovered && content !== "" && (
				<div className="absolute z-40 top-[110%] left-[50%] translate-x-[-50%] text-nowrap bg-[#e3e3e3] text-gray-900 py-[5px] px-[8px] shadow-lg text-[12px] rounded-sm text-center">
					{content.split('<br>').map((item, index) => (
						<p key={index}>{item}</p>
					))}
				</div>
			)}
		</div>
	);
};

export default WhiteHover;