import React, { useEffect } from 'react';
import $ from "jquery";
import add from '../assets/icons/add.svg';
import Button from './leftSideBar/button';
import home from '../assets/icons/home.svg';
import hardDrive from '../assets/icons/hard_drive.svg';
import devices from '../assets/icons/devices.svg';
import group from '../assets/icons/group.svg';
import schedule from '../assets/icons/schedule.svg';
import star from '../assets/icons/star.svg';
import report from '../assets/icons/report.svg';
import trash from '../assets/icons/delete.svg';
import cloude from '../assets/icons/cloud.svg';
import ButtonClicked from './leftSideBar/buttonClicked';

const LeftSidebar = () => {
	const Storage= 84;
	useEffect(() => {
		$("#progressBar").css("width", Storage + "%");
	}, []);
	return (
		<div className="flex flex-col items-center min-w-[256px]">
			<div className='flex flex-row items-center gap-[12px] mt-[7px] mr-[124px] pl-[16px] pr-[20px] py-[16px] rounded-2xl transition-all bg-[#37393b] hover:bg-[#494d53]'>
				<img src={add} alt='add' className='w-[24px]' />
				<div className='text-[14px]'>New</div>
			</div>
			<div className='mt-[16px]'>
				<Button icon={home} label='Home' />
				<div className='relative'>
					<svg className="absolute left-[5px] top-[50%] translate-y-[-50%]" width="14px" height="14px" viewBox="0 0 20 20" focusable="false" fill="currentColor"><polygon points="8,5 13,10 8,15"></polygon></svg>
					<ButtonClicked icon={hardDrive} label='My Drive' />
				</div>
				<div className='relative'>
					<svg className="absolute left-[5px] top-[50%] translate-y-[-50%]" width="14px" height="14px" viewBox="0 0 20 20" focusable="false" fill="currentColor"><polygon points="8,5 13,10 8,15"></polygon></svg>
					<Button icon={devices} label='Computers' />
				</div>
			</div>
			<div className='mt-[14px]'>
				<Button icon={group} label='Shared with me' hoverText="items Shared with me" />
				<Button icon={schedule} label="Recent" hoverText='Recent items' />
				<Button icon={star} label="recent" hoverText='Starred items' />
			</div>
			<div className='mt-[14px]'>
				<Button icon={report} label="Spam"/>
				<Button icon={trash} label='trash' hoverText="Trashed items" />
				<Button icon={cloude} label={`Storage (${Storage}% full)`}/>
			</div>
			<div className='w-[175px] bg-[#444746] rounded-full mt-[8px] mr-[10px]'>
				<div id="progressBar" className='h-[4px] bg-[#fcbd00]'>
				</div>
			</div>
			<div className='text-[#c4c7c5] text-[14px] cursor-pointer my-[0.4rem] w-[72%]'>12.65 GB of 15 GB used</div>
			<div className='text-[#a8c7fa] hover:bg-[#22252a] cursor-pointer pb-[6px] pt-[8px] mr-[20px] text-[14px] w-[66%] mt-[4px] border-[1px] border-[#8e918f] rounded-full text-center'>
				Get more storage
			</div>
		</div>
	);
};

export default LeftSidebar;