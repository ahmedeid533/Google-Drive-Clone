import React, { useState } from 'react';
const BlackHoverAccount = ({ children , content}) => {
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
					className="absolute z-20 top-[101%] cursor-auto transition-opacity font-bold right-[-5%] text-nowrap bg-[#383c3ecc] py-[4px] px-[7px] shadow-lg rounded-sm"
					onMouseEnter={() => { setHovered(true)}} 
					onMouseLeave={() => setHovered(false)} 
				>
					<div className='text-[#f5f5f5] text-[10px]'>{content}</div>
					<div className='text-[#f5f5f599] text-[10px]'>ahmed eid gomaa</div> 
					<div className='text-[#f5f5f599] text-[10px]'>ahmedeidgoma333@gmail.com</div>

				</div>
			)}
		</div>
	);
};

export default BlackHoverAccount;
