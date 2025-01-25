import React from 'react';
import WhiteHover from '../global/whiteHover';

const IconHover = ({ icon, content }) => {
	return (
		<WhiteHover content={content}>
			<img src={icon} alt='icon' className='w-[32px] rounded-full hover:bg-[#2b2b2b88] p-[6px]' />
		</WhiteHover>
	);
};

export default IconHover;