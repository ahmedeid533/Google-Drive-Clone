import React, { useState } from 'react';
const BlackHoverS = ({ children , show}) => {
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
					id='showSidePanel'
					className="absolute bottom-[101%] transition-opacity font-bold right-[40%] text-nowrap bg-[#383c3ecc] py-[4px] px-[7px] shadow-lg text-[#f5f5f5] text-[10px] rounded-sm"
					onMouseEnter={() => setHovered(true)} 
					onMouseLeave={() => setHovered(false)}
				>
					{show ? 'Show side panel' : 'Hide side panel'}
				</div>
			)}
		</div>
	);
};

export default BlackHoverS;
