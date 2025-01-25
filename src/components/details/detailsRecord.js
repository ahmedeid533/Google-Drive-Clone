import React from 'react';

const DetailsRecord = ({children, label}) => {
	return (
		<div className='text-[13px] my-[20px]'>
			<div className='font-medium'>{label}</div>
			{children}
		</div>
	);
};

export default DetailsRecord;