import React from 'react';
import HeadOfLayout from './headOfLayout';
import RecordOfLayout from './recordOfLayout';
import RecordOfLayoutOfGrid from './recordOfLayoutOfGrid';
import cs50 from '../../assets/images/CS50x.png';
import ALX from '../../assets/images/alxBackEnd.png';
import php from '../../assets/images/PHP&mySql.png';
import web from '../../assets/images/wep_challenage.png';
import gdsc from '../../assets/images/GDSC.png';
import cN from '../../assets/images/computerNetworking.png';
import da from '../../assets/images/data_analysing.png';
import frontEnd from '../../assets/images/professionalFrontEnd.png';
import tech from '../../assets/images/thechnicalSupport.png';
import me from '../../assets/images/myRegPhotoSocial.png';

const LayOut = () => {
	const files = [
		{ name: 'CS50x.png', size: '493 KB', date: 'Aug 25, 2024 ', src: cs50 },
		{ name: 'alxBackEnd.png', size: '700 KB', date: 'Jul 23, 2024 ', src: ALX },
		{ name: 'PHP&mySql.png', size: '1.2 MB', date: 'Jun 21, 2024 ', src: php },
		{ name: 'wep_challenage.png', size: '1.3 MB', date: 'May 20, 2024 ', src: web },
		{ name: 'GDSC.png', size: '1.5 MB', date: 'Apr 19, 2024 ', src: gdsc },
		{ name: 'computerNetworking.png', size: '1.7 MB', date: 'Mar 18, 2024 ', src: cN },
		{ name: 'data_analysing.png', size: '1.9 MB', date: 'Feb 17, 2024 ', src: da },
		{ name: 'professionalFrontEnd.png', size: '2.1 MB', date: 'Jan 16, 2024 ', src: frontEnd },
		{ name: 'thechnicalSupport.png', size: '2.3 MB', date: 'Dec 15, 2023 ', src: tech },
		{ name: 'myRegPhotoSocial.png', size: '2.5 MB', date: 'Nov 14, 2023 ', src: me }
	];
	return (
		<div 
			className='ml-[16px] mt-[-4px] ' 
		>
			<div id='listLayout'>
				<div className='pr-[30px]'>
					<HeadOfLayout />
				</div>
				<div className='overflow-y-scroll overflow-x-hidden h-[71vh] scroll-custom mr-[20px]'>
					{files.map((file, index) => {
						return <RecordOfLayout key={index} name={file.name} size={file.size} date={file.date} src={file.src} />
					})}
					{files.map((file, index) => {
						return <RecordOfLayout key={index} name={file.name} size={file.size} date={file.date} src={file.src} />
					})}
					{files.map((file, index) => {
						return <RecordOfLayout key={index} name={file.name} size={file.size} date={file.date} src={file.src} />
					})}
				
				</div>
			</div>
			<div id='gridLayout' className='hidden overflow-y-scroll overflow-x-hidden h-[75vh] scroll-custom mr-[20px] mt-[26px]'>
				<div className='text-[16px]  mb-[10px] ml-[10px] font-semibold'>Files</div>
				<div id='gridWidth' className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mr-[16px] '>
					{files.map((file, index) => {
						return <RecordOfLayoutOfGrid key={index} name={file.name} src={file.src} size={file.size} date={file.date} />
					})}
					{files.map((file, index) => {
						return <RecordOfLayoutOfGrid key={index} name={file.name} src={file.src} size={file.size} date={file.date} />
					})}
					{files.map((file, index) => {
						return <RecordOfLayoutOfGrid key={index} name={file.name} src={file.src} size={file.size} date={file.date} />
					})}
				</div>
			</div>
		</div>
	)
}

export default LayOut;