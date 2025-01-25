import React from 'react';
import $ from 'jquery';
import WhiteHover from '../global/whiteHover';
import imageIcon from '../../assets/icons/imageIcon.svg';
import dots from '../../assets/icons/more_vert.svg';

const RecordOfLayoutOfGrid = ({name, src, size, date}) => {

	const handleClick = (e) => {
		$('.record').removeClass('!bg-[#004A77]');
		$('.record').removeClass('bg-[#004A77]');
		$('.record').addClass('hover:bg-[#2b2b2b]');
		e.classList.remove('hover:bg-[#2b2b2b]');
		e.classList.add('!bg-[#004A77]');
		$('#selectList').addClass('hidden'); 
		$('#selected').removeClass('hidden');
		$('#fileName').html(e.querySelector('#name').innerHTML);
		$('#fileIcon').attr('src', e.querySelector('#recordIcon').src);
		$('#imageSrc').attr('src', src);
		$('#detailsStateEmp').addClass('hidden');
		$('#detailsState').removeClass('hidden');
		$('.sizeDetails').html(size);
		$('.dateDetails').html(date);
	}

	return (
		<div 
			className='flex flex-col p-[10px] gap-[4px] rounded-xl bg-[#1b1b1b] hover:bg-[#2b2b2b] record'
			onClick={(e)=>handleClick(e.currentTarget)}
		>
			<div className='flex flex-row items-center'>
				<img id='recordIcon' src={imageIcon} alt='icon' className='w-[30px] rounded-full p-[5px]' />
				<div className='w-full'>
					<div className='w-fit'>
						<WhiteHover content={name}>
							<div id='name' className='text-[14px] text-ellipsis w-[2vw] lg:w-[3vw] 2xl:w-[6vw] overflow-hidden'>{name}</div>
						</WhiteHover>
					</div>
				</div>
				<img src={dots} alt='star' className='w-[30px] p-[5px]' />
			</div>
			<img src={src} alt={name} className='w-full aspect-[1.2] object-cover object-top rounded-sm' />
		</div>
	);
};

export default RecordOfLayoutOfGrid;