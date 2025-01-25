import React from 'react';
import myDrive from '../../assets/icons/hard_drive.svg';
import history from '../../assets/icons/history.svg';
import DetailsRecord from './detailsRecord';
import WhiteHover from '../global/whiteHover';

const DetailsSec3 = () => {
	return (
		<div className='m-[16px] mt-[22px]'>
			<div className='font-medium text-[17px]'>File details</div>
			<DetailsRecord label='Type'>
				<div className='text-[14px] mt-[-2px] opacity-85'>Image</div>
			</DetailsRecord>
			<DetailsRecord label='Size'>
				<div className='text-[14px] mt-[-2px] opacity-85 sizeDetails'>1 MB</div>
			</DetailsRecord>
			<DetailsRecord label='Storage used'>	
				<div className='text-[14px] mt-[-2px] opacity-85 sizeDetails'>1 MB</div>
			</DetailsRecord>
			<DetailsRecord label='Dimensions'>
				<div className='text-[14px] mt-[-2px] opacity-85'>1024 x 1024</div>
			</DetailsRecord>
			<DetailsRecord label='Location'>
				<div className='px-[10px] pt-[5px] pb-[3px] w-fit mt-[2px] flex flex-row cursor-pointer hover:bg-[#3c4043] rounded-[8px] border-[1px] border-[#939393] text-[14px]'>
					<img src={myDrive} alt='arrow drop down' className='w-[18px] mr-[8px] relative mb-[2px]' />
					<div>My Drive</div>
				</div>
			</DetailsRecord>
			<DetailsRecord label='Modified'>
				<div className='text-[14px] mt-[-2px] opacity-85 flex flex-row'>
					<span className='dateDetails'></span> by me 
					<WhiteHover content='Manage versions'>
						<img src={history} alt='history' className='inline w-[26px] p-[3px] rounded-full hover:bg-[#1b1b1b] ml-[4px] mt-[-3px]' />
					</WhiteHover>
				</div>
			</DetailsRecord>
			<DetailsRecord label='Opened'>
				<div className='text-[14px] mt-[-2px] opacity-85'><span className='dateDetails'></span> by me</div>
			</DetailsRecord>
			<DetailsRecord label='Created'>
				<div className='text-[14px] mt-[-2px] opacity-85 dateDetails'>1 MB</div>
			</DetailsRecord>
		</div>
	);
};

export default DetailsSec3;