import React, { useState } from 'react';
import imageIcon from '../../assets/icons/imageIcon.svg';
import star from '../../assets/icons/star.svg';
import WhiteHover from '../global/whiteHover';
import history from '../../assets/icons/history.svg';

const RecordHover = ({ children, src, name }) => {
	const [hovered, setHovered] = useState(false);
	const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
	let hoverTimeout;
	

	const handleMouseEnter = (e) => {
		const { clientX, clientY } = e;
		hoverTimeout = setTimeout(() => {
			setHovered(true);
			setTooltipPosition({ x: clientX, y: clientY });
		}, 400);
	};

	const handleMouseLeave = () => {
		clearTimeout(hoverTimeout);
		const wait = setInterval(() => {
			setHovered(false);
			clearInterval(wait);
		}, 500);
	};

	return (
		<div 
			className="cursor-pointer" 
			onMouseEnter={handleMouseEnter} 
			onMouseLeave={handleMouseLeave}
		>
			{children}
			{hovered && 
				<div 
					style={{ top: tooltipPosition.y - 215, left: tooltipPosition.x + 5 }}
					className="absolute transition-opacity font-bold bg-[#383c3e] py-[4px] px-[7px] shadow-lg rounded-xl"
					onMouseEnter={handleMouseEnter} 
					onMouseLeave={handleMouseLeave}
				>
					<div className='flex flex-row items-center'>
						<img src={imageIcon} alt='icon' className='w-[30px] rounded-full p-[5px]' />
						<div className='w-full'>
							<div className='w-fit'>
								<WhiteHover content={name}>
									<div className='text-[14px]'>{name}</div>
								</WhiteHover>
							</div>
						</div>
						<img src={star} alt='star' className='w-[30px] p-[5px]' />
					</div>
					<img src={src} alt='cs50' className='min-w-[300px] h-[140px] object-cover object-top rounded-md' />
					<div className='flex flex-row items-center m-[4px] mt-[6px]'>
						<img src={history} alt='history icon' className='w-[30px] rounded-full p-[5px]' />
						<div className='w-full'>
							<div className='text-[13px] opacity-80'>No changes since last viewed by you</div>
						</div>
					</div>
				</div>
			}
		</div>
	);
};

export default RecordHover;
