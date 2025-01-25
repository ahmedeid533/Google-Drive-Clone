import React from 'react';
import WhiteHover from '../global/whiteHover';
import arrowDropDown from '../../assets/icons/arrow_drop_down.svg';

const Select = ({label}) => {
	return (
		
			<div className='px-[16px] pt-[5px] pb-[3px] w-fit ml-[5px] flex flex-row mt-[14px] hover:bg-[#3c4043] rounded-[8px] border-[1px] border-[#939393] text-[14px]'>
				<WhiteHover content={label}>
					{label}
				</WhiteHover>
				<img src={arrowDropDown} alt='arrow drop down' className='w-[18px] ml-[8px] relative -right-[4px] mb-[2px]'/>
			</div>
	);
};

export default Select;