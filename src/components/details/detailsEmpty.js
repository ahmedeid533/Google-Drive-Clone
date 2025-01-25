import React from 'react';
import emptyState from '../../assets/icons/empty_state.svg'; // Make sure to replace this with the actual path to your image

const DetailsEmpty = () => {
	return (
		<div id='detailsStateEmp' className=''>
			<img 
				src={emptyState} 
				alt='file' 
				className='w-[300px] h-[200px] object-contain m-[10px] object-top rounded-md' 
			/>
			<div className='text-center opacity-80 text-[14px] mt-[10px]'>
				Select an item to see the details
			</div>
		</div>
	);
};

export default DetailsEmpty;