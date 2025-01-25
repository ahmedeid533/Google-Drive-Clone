import React from 'react';
import WhiteHover from '../global/whiteHover';

const Button = ({ icon, label, hoverText }) => {
	return (
		<div className='flex flex-row items-center font-[400] cursor-pointer gap-[14px] w-[224px] px-[6px] py-[6px] rounded-full transition-all hover:bg-[#2b2b2b]'>
			<img src={icon} alt='add' className='w-[20px] ml-[12px]' />
			<WhiteHover content={hoverText}>
				<div className='w-[150px] text-[14px] text-[#E3E3E3]'>{label}</div>
			</WhiteHover>
		</div>
	);
};

export default Button;