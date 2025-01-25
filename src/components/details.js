import React from 'react';
import DetailsHeader from './details/detailsHeader';
import DetailsOptions from './details/detailsOptions';
import DetailsData from './details/detailsData';
import DetailsEmpty from './details/detailsEmpty';

const Details = () => {
	
	return (
		<div id='details' className='ml-[16px] bg-[#131314] min-w-[320px] text-[#E3E3E3] rounded-2xl hidden'>
			<DetailsHeader />
			<DetailsOptions />
			<DetailsData />
			<DetailsEmpty />
		</div>
	);
};

export default Details;