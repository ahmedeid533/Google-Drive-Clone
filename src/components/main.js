import React from 'react';
import ChangeLayoutSection from './main/changeLayoutSection';
import SelectionSection from './main/selectionSection';
import LayOut from './main/layout';
const Main = () => {
	return (
		<div className='w-full ml-[4px] bg-[#131314] text-[#E3E3E3] rounded-2xl'>
			<ChangeLayoutSection />
			<SelectionSection/>
			<LayOut/>

		</div>
	);
};

export default Main;