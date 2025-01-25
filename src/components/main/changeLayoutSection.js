import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import WhiteHover from '../global/whiteHover';
import arrowDropDown from '../../assets/icons/arrow_drop_down.svg';
import check from '../../assets/icons/check.svg';
import list from '../../assets/icons/list.svg';
import grid from '../../assets/icons/grid_view.svg';
import info from '../../assets/icons/info.svg';
const ChangeLayoutSection = () => {
	const [listLayout, setListLayout] = useState(false);
	const [details, setDetails] = useState(true);

	const handleClick = (e) => {
		e.classList.toggle('bg-[#004A77]');
		e.classList.toggle('hover:bg-[#3c4043]');
		$('#details').toggleClass('hidden');
		setDetails(!details);
	}
	useEffect(() => {
		$('#listLayout').toggle('hidden');
		$('#gridLayout').toggle('hidden');
		$('#detailsStateEmp').removeClass('hidden');
		$('#detailsState').addClass('hidden');
		$('.record').removeClass('!bg-[#004A77]');
		$('.record').removeClass('bg-[#004A77]');
		$('.record').addClass('hover:bg-[#2b2b2b]');
	}, [listLayout]);
	useEffect(() => {
		if ($('#details').hasClass('hidden')) {
			$('#gridWidth').removeClass('sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5')
			$('#gridWidth').addClass('sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6')
		} else {
			$('#gridWidth').removeClass('sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6')
			$('#gridWidth').addClass('sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5')
		}
	}, [details]);

	return (
		<div className='flex flex-row items-center '>
			<div className='w-auto'>
				<div className='pl-[16px] pr-[12px] py-[4px] w-fit ml-[5px] mt-[10px]  cursor-pointer hover:bg-[#1b1b1b] rounded-full text-[24px]'>
					My Drive
					<img src={arrowDropDown} alt='arrow drop down' className='w-[28px] ml-[2px] mb-[4px] inline'/>
				</div>
			</div>
			<div className='flex flex-row mt-[20px] ml-auto mr-[24px]'>
				<WhiteHover content='List Layout'>
					<div 
						className={'w-[55px] h-fit py-[6px] flex flex-row rounded-l-full border-[#E3E3E3] border-[1px] border-r-[0.5px]  justify-center '+ (listLayout ? 'bg-[#004A77]':' hover:bg-[#3c4043]' )}
						onClick={()=>setListLayout(true)}
					>
						{listLayout && <img src={check} alt='check' className='w-[18px]'/>}
						<img src={list} alt='check' className='w-[18px]'/>
					</div>
				</WhiteHover>
				<WhiteHover content='grid Layout'>
					<div 
						className={'w-[55px] h-fit py-[6px] flex flex-row rounded-r-full border-[#E3E3E3] border-[1px] border-l-[0.5px] justify-center ' + (listLayout ? ' hover:bg-[#3c4043]' : ' bg-[#004A77]')}
						onClick={()=>setListLayout(false)}
					>
						{!listLayout && <img src={check} alt='check' className='w-[18px]'/>}
						<img src={grid} alt='grid' className='w-[18px]'/>
					</div>
				</WhiteHover>
				<WhiteHover content='View Details'>
					<div 
						id='info'
						className='p-[9px] rounded-full hover:bg-[#3c4043] relative translate-y-[-4px]  ml-[4px] mb-[4px] justify-center'
						onClick={(e)=>{handleClick(e.currentTarget)}}
					>
						<img src={info} alt='info' className='w-[22px]'/>
					</div>
				</WhiteHover>
			</div>
		</div>
	);
};

export default ChangeLayoutSection;