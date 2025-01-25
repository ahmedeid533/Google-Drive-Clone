import React from 'react';
import $ from 'jquery';
import WhiteHover from '../global/whiteHover';
import imageIcon from '../../assets/icons/imageIcon.svg';
import close from '../../assets/icons/close.svg';


const DetailsHeader = () => {
	const handleClick = (e) => {
		$('#details').addClass('hidden');
		$('#info').removeClass('bg-[#004A77]');
		$('#info').addClass('hover:bg-[#3c4043]');
		$('#gridWidth').removeClass('sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5')
		$('#gridWidth').addClass('sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6')
	}
	return (
		<div className='flex flex-row items-center p-[16px]'>
				<img id='fileIcon' src={imageIcon} alt='icon' className='w-[36px] cursor-pointer rounded-full p-[5px] mr-[10px]' />
				<div className='w-full'>
					<div className='w-fit'>
						<WhiteHover content={$('#fileName').html()}>
							<div id='fileName' className='text-[16px] font-bold'>CS50x.png</div>
						</WhiteHover>
					</div>
				</div>
				<div onClick={()=>handleClick()} className='cursor-pointer'>
					<WhiteHover content="close details">
						<img src={close} alt='icon' className='w-[48px] rounded-full hover:bg-[#2b2b2b88] p-[6px]' />
					</WhiteHover>
				</div>
			</div>
	);
};

export default DetailsHeader;