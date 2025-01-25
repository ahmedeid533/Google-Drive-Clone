import React, { useState } from 'react';
import logo from '../../Google_Drive_icon.svg';

const Logo = () => {
	const [hovered, setHovered] = useState(false);
	const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
	let hoverTimeout;
	
	const handleMouseEnter = (e) => {
		const { clientX, clientY } = e;
		hoverTimeout = setTimeout(() => {
			setHovered(true);
			setTooltipPosition({ x: clientX, y: clientY });
		}, 1000);
	};

	const handleMouseLeave = () => {
		clearTimeout(hoverTimeout);
		setHovered(false);
	};

	return (
		<div 
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className='relative flex flex-row items-center w-[248px] pl-[18px] cursor-pointer'>
			<img src={logo} className='w-[36px] mb-[4px] mr-[11px]' alt='Google Drive' />
			<h1 className='text-[#C4C7C5] text-[22px]'>Drive</h1>
			{
				hovered && (
					<div 
						style={{ top: tooltipPosition.y - 13, left: (tooltipPosition.x - 60 < -20 ? -20 : tooltipPosition.x - 60) }}
						className='absolute bg-[#1b1b1b] border-white border-[0.5px] py-[6px] px-[9px] shadow-lg text-[#fff] text-[14px]' >
						Drive
					</div>
				)
			}
		</div>
	);
};

export default Logo;
