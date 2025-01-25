import React from 'react';
import imageIcon from '../../assets/icons/imageIcon.svg';
import me from '../../assets/images/myRegPhotoSocial.png';

const DetailsSec1 = () => {
	return (
		<div className='border-b-[1px] border-[#3b3b3b]'>
			<img
				id='imageSrc'
				src={imageIcon}
				alt='file'
				className='w-[300px] h-[170px] border-[1px] cursor-pointer border-[#cccccc] object-cover m-[10px] object-top rounded-md'
			/>
			<div className='pt-[20px] px-[16px] text-[16px] font-medium'>Who has access</div>
			<img
				src={me}
				alt='me'
				className='w-[40px] h-[40px] relative translate-x-[-4px] mt-[5px] object-cover rounded-full p-[4px] mx-[16px]'
			/>
			<div className='px-[16px] text-[12px] opacity-80 my-[6px]'>Private to you</div>
			<div className='text-[#a8c7fa] hover:bg-[#22252a] cursor-pointer font-medium pb-[6px] pt-[8px] mx-[16px] mb-[26px] text-[16px] w-[50%] mt-[10px] border-[1px] border-[#8e918f] rounded-full text-center'>
				Manage access
			</div>
		</div>
	);
};

export default DetailsSec1;