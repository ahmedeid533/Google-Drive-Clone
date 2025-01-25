import React from 'react';
import policy from '../../assets/icons/policy.svg';

const DetailsSec2 = () => {
	return (
		<div className='border-b-[1px] border-[#3b3b3b]'>
			<div className='flex flex-row items-center p-[16px] pb-[0px]'>
				<img 
					src={policy} 
					alt='policy' 
					className='w-[30px] h-[30px] relative translate-x-[-4px] object-cover rounded-full p-[4px]' 
				/>
				<div className='text-[16px] font-medium'>Security limitations</div>
			</div>
			<div className='px-[18px] py-[15px] rounded-xl bg-[#1b1b1b] m-[16px] mb-[22px]'>
				<div className='text-[13px] mb-[3px] font-medium'>No limitations applied</div>
				<div className='text-[13px]'>If any are applied, they will appear here</div>
			</div>
		</div>
	);
};

export default DetailsSec2;