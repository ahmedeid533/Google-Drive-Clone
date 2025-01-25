import React from 'react';
import DetailsSec1 from './detailsSec1';
import DetailsSec2 from './detailsSec2';
import DetailsSec3 from './detailsSec3';
import DetailsRecord from './detailsRecord';

const DetailsData = () => {
	return (
		<div id='detailsState' className='hidden overflow-y-scroll overflow-x-hidden h-[77vh] scroll-custom'>
			<DetailsSec1 />
			<DetailsSec2 />
			<DetailsSec3 />
			<div className='mx-[16px] mb-[-10px]'>
				<DetailsRecord label={'Description'} />
					<input 
						type='text'
						placeholder='Add a description'
						className='w-full h-[40px] border-[1px] outline-[#a8c7fa] placeholder:text-[#E3E3E3CC] text-[16px] border-[#5b5b5b] mt-[-26px] rounded-sm p-[16px]'
					/>
					<div className='text-[12px] w-[92%] text-end'>0/25,000</div>
				<DetailsRecord />
			</div>
		</div>
	);
};

export default DetailsData;