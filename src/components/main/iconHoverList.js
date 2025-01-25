import React from 'react';
import WhiteHover from '../global/whiteHover';

const IconHoverList = ({ icon, content }) => {
	return (
		<WhiteHover content={content}>
			<img src={icon} alt='icon' className='w-[32px] rounded-full hover:bg-[#cccccc22] p-[6px]' />
		</WhiteHover>
	);
};

export default IconHoverList;