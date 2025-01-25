import React from 'react';
import arrowUp from '../../assets/icons/arrow_upward.svg';
import WhiteHover from '../global/whiteHover';
import arrowDropDown from '../../assets/icons/arrow_drop_down.svg';
import dots from '../../assets/icons/more_vert.svg';

const HeadOfLayout = () => {
	return (
		<div className='flex flex-row mt-[14px] ml-[6px] border-b-[1px] border-[#3c4043]'>
			<div className='w-full flex flex-row text-[16px] mt-[8px] items-center'>
				<div className='hover:bg-[#1b1b1b] cursor-pointer w-fit px-[16px] ml-[-16px] py-[4px] rounded-full'>Name</div>
				<WhiteHover content='Reverse sort direction'>
					<img src={arrowUp} alt='arrow up' className='w-[28px] rounded-full hover:bg-[#1b1b1b] p-[6px]' />
				</WhiteHover>
			</div>
			<div className='xl:min-w-[215px] sm:min-w-[140px] hidden sm:block my-auto cursor-default'>
				Owner
			</div>
			<div className='xl:min-w-[200px] flex-row md:min-w-[144px] hidden md:flex my-auto cursor-pointer'>
				<div className='w-fit flex flex-row hover:bg-[#1b1b1b] rounded-full px-[12px] py-[4px]'>
					<div>Last modified</div>
					<img src={arrowDropDown} alt='arrow drop down' className='w-[22px] mb-[4px] inline' />
				</div>
			</div>
			<div className='lg:min-w-[88px] hidden lg:block my-auto cursor-default'>
				File size
			</div>
			<div className='xl:min-w-[192px] lg:min-w-[48px] flex flex-row items-center'>
				<div className='xl:block lg:hidden w-full'></div>
				<WhiteHover content='more sorting options'>
					<img src={dots} alt='more options' className='w-[40px] rounded-full my-[3px] hover:bg-[#1b1b1b] p-[8px]' />
				</WhiteHover>
			</div>
		</div>
	);
};

export default HeadOfLayout;