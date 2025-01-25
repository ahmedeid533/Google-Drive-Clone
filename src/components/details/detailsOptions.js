import React from 'react';

const DetailsOptions = () => {
	return (
		<div className='flex flex-row items-center mt-[10px] w-full border-b-[1px] border-[#3b3b3b] font-medium'>
			<div className='flex flex-row items-center justify-center w-1/2 cursor-pointer hover:bg-[#22252a]'>
				<span className='py-[8px] border-b-[3px] mx-auto border-[#a8c7fa] text-[#a8c7fa]'>
					Details
				</span>
			</div>
			<div className='flex flex-row items-center justify-center w-1/2 cursor-pointer hover:bg-[#22252a]'>
				<span className='py-[8px] mx-auto'>
					Activity
				</span>
			</div>
		</div>
	);
};

export default DetailsOptions;