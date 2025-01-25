import React,{ useState } from 'react';
import $ from 'jquery';
import person from '../../assets/icons/person_add.svg';
import download from '../../assets/icons/download.svg';
import IconHoverList from './iconHoverList';
import rename from '../../assets/icons/edit.svg';
import star from '../../assets/icons/star.svg';
import WhiteHover from '../global/whiteHover';
import dots from '../../assets/icons/more_vert.svg';
import imageIcon from '../../assets/icons/imageIcon.svg';
import me from '../../assets/images/myRegPhotoSocial.png';
import RecordHover from './recordHover';
import WhiteHoverDots from './whiteHoverDots';

const RecordOfLayout = ({name, date, size, src}) => {
	const [hovered, setHovered] = useState(false);

	const handleClick = (e) => {
		$('.record').removeClass('bg-[#004A77]');
		$('.record').removeClass('!bg-[#004A77]');
		$('.record').addClass('hover:bg-[#2b2b2b]');
		e.classList.remove('hover:bg-[#2b2b2b]');
		e.classList.add('bg-[#004A77]');
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
			className='flex flex-row ml-[6px] border-b-[1px] border-[#3c4043] hover:bg-[#2b2b2b] record'
			onClick={(e)=>handleClick(e.currentTarget)}
			onMouseEnter={()=>setHovered(true)}
			onMouseLeave={()=>setHovered(false)}
		>
			<div className='w-full flex flex-row text-[16px] my-[2px] items-center'>
				<RecordHover src={src} name={name}>
					<img id='recordIcon' src={imageIcon} alt='icon' className='w-[40px] rounded-full p-[10px]' />
				</RecordHover>
				<div id='name' className='cursor-pointer w-fit px-[16px] ml-[-16px] py-[4px] rounded-full'>{name}</div>
			</div>
			<div className='xl:min-w-[215px] sm:min-w-[140px] hidden sm:flex my-auto cursor-default flex-row items-center text-[14px]'>
				<img src={me} alt='me' className='w-[30px] h-[30px] relative translate-x-[-4px] mr-[4px] object-cover rounded-full p-[4px]' />
				<WhiteHover content='owned by me'>
					<div className='min-w-[100px]'>me</div>
				</WhiteHover>
			</div>
			<div className='xl:min-w-[200px] flex-row md:min-w-[144px]  hidden md:flex my-auto cursor-pointer text-[14px] pl-[12px]'>
				<WhiteHover content={`Last modified my me ${date}`}>
					<div className='opacity-80'>{date}me</div>
				</WhiteHover>
			</div>
			<div className='lg:min-w-[88px] hidden lg:block my-auto  text-[14px] cursor-default'>
			<WhiteHover content={`Size: ${size} <br> Storage used: ${size}`}>
				<div className='opacity-80'>{size}</div>
			</WhiteHover>
			</div>
			<div className='xl:min-w-[192px] lg:min-w-[48px] flex flex-row items-center'>
				<div className='lg:block hidden w-full'>
				{	
					hovered && 
					<div className='items-center xl:block hidden flex-row gap-[8px] p-[4px] rounded-full'>
						<IconHoverList icon={person} content='Share' />
						<IconHoverList icon={download} content='Download' />
						<IconHoverList icon={rename} content='Rename' />
						<IconHoverList icon={star} content='Add to starred' />
					</div>
				}
				</div>
				<WhiteHoverDots content='More actions'>
					<img src={dots} alt='more actions' className='w-[40px] rounded-full my-[3px] hover:bg-[#cccccc22] p-[8px]' />
				</WhiteHoverDots>
			</div>
		</div>
	);
};

export default RecordOfLayout;