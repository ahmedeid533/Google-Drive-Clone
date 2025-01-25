import React from 'react';
import $ from 'jquery';
import Select from './select';
import close from '../../assets/icons/close.svg';
import driveFile from '../../assets/icons/drive_file.svg';
import hardDrive from '../../assets/icons/hard_drive.svg';
import link from '../../assets/icons/link.svg';
import trash from '../../assets/icons/delete.svg';
import person from '../../assets/icons/person_add.svg';
import download from '../../assets/icons/download.svg';
import dots from '../../assets/icons/more_vert.svg';
import IconHover from './iconHover';

const SelectionSection = () => {

	const handleClick = (e) => {
		$('.record').removeClass('!bg-[#004A77]');
		$('.record').removeClass('bg-[#004A77]');
		$('.record').addClass('hover:bg-[#2b2b2b]');
		$('#selected').addClass('hidden');
		$('#selectList').removeClass('hidden');
		$('#fileName').html('My Drive');
		$('#fileIcon').attr('src', hardDrive);
		$('#detailsStateEmp').removeClass('hidden');
		$('#detailsState').addClass('hidden');
	}

	return (
		<>
			<div id='selectList' className='flex flex-row ml-[16px] gap-[2px] mt-[-4px]'>
				<Select label={"Type"}/>
				<Select label={"People"}/>
				<Select label={"Modified"}/>
				<Select label={"Source"}/>
			</div>
			<div id='selected' className='w-full hidden px-[20px] my-[4px]'>
				<div className='bg-[#1b1b1b] flex items-center flex-row gap-[8px] p-[4px] rounded-full'>
					<div onClick={()=>handleClick()} className='cursor-pointer'>
						<IconHover icon={close} content='clear all' />
					</div>
					<div className='mx-[4px] cursor-default'>1 selected</div>
					<IconHover icon={person} content='Share' />
					<IconHover icon={download} content='Download' />
					<IconHover icon={driveFile} content='Move' />
					<IconHover icon={trash} content='Delete' />
					<IconHover icon={link} content='Copy link' />
					<IconHover icon={dots} content='More actions' />
				</div>
			</div>
		</>
	);
};

export default SelectionSection;