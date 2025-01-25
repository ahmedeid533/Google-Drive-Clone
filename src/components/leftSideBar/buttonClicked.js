import React from 'react';
import WhiteHover from '../global/whiteHover';

const ButtonClicked = ({ icon, label, hoverText }) => {
	return (
		<div className='flex flex-row items-center cursor-pointer gap-[14px] w-[224px] px-[6px] py-[6px] rounded-full transition-all bg-[#004A77]'>
			<img src={icon} alt='add' className='w-[20px] ml-[12px]' />
			<WhiteHover content={hoverText}>
				<div className='w-full text-[14px] text-[#C2E7FF]'>{label}</div>
			</WhiteHover>
		</div>
	);
};

export default ButtonClicked;