import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import calender from '../assets/icons/calender.png';
import keep from '../assets/icons/keep.png';
import tasks from '../assets/icons/tasks.png';
import contacts from '../assets/icons/contacts.png';
import add from '../assets/icons/add.svg';
import BlackHoverR from './rightSideBar/blackHoverR';
import BlackHoverS from './rightSideBar/blackHoverS';
import arrowRight from '../assets/icons/arrowRight.svg';
const RightSideBar = () => {
	const [show, setShow] = useState(false)

	useEffect(() => {
		show ? $('#changeWidth').css('minWidth','16px') : $('#changeWidth').css('minWidth','56px')
		show ? $('#arrow').css('width','48px') : $('#arrow').css('width','40px')
		show ? $('#arrow').css('background-color','#3c3e40') : $('#arrow').css('background-color','transparent')
		show ? $('#arrow img').css('rotate','180deg') : $('#arrow img').css('rotate','0deg')
		if (show) {
			$('#arrow').hover(()=>{
				$('#arrow').css('width') !== '40px' ? $('#arrow').css('width','78px') : $('#arrow').css('width','40px')
			}, () => {
				$('#arrow').css('width') !== '40px' ? $('#arrow').css('width','48px') : $('#arrow').css('width','40px')
			})
		}
	},[show])
	return (
		<div id='changeWidth' className="relative flex flex-col items-center min-w-[45px] mt-[10px] h-[90vh]">
			{
				!show &&
				<div id="rightSideBar">
					<div className='mb-[18px]'>
						<BlackHoverR content='Calender'>
							<div className='hover:bg-[#3c3e40] rounded-full p-[11px]'>
								<img src={calender} alt='calender' className='w-[18px]' />
							</div>
						</BlackHoverR>
					</div>
					<div className='mb-[18px]'>
						<BlackHoverR content='Keep'>
							<div className='hover:bg-[#3c3e40] rounded-full p-[11px]'>
								<img src={keep} alt='keep' className='w-[18px]' />
							</div>
						</BlackHoverR>
					</div>
					<div className='mb-[18px]'>
						<BlackHoverR content='Tasks'>
							<div className='hover:bg-[#3c3e40] rounded-full p-[11px]'>
								<img src={tasks} alt='tasks' className='w-[18px]' />
							</div>
						</BlackHoverR>
					</div>
					<div className='mb-[22px]'>
						<BlackHoverR content='Contacts'>
							<div className='hover:bg-[#3c3e40] rounded-full p-[11px]'>
								<img src={contacts} alt='contacts' className='w-[16px]' />
							</div>
						</BlackHoverR>
					</div>
					<div className='w-[45%] h-[1px] mb-[22px] mx-auto bg-[#3c3e40]'></div>
					<BlackHoverR content='Get Add-ons'>
						<div className='hover:bg-[#3c3e40] rounded-full p-[11px]'>
							<img src={add} alt='add' className='w-[18px]' />
						</div>
					</BlackHoverR>
				</div>
			}
			<div 
				id='arrow'
				className='absolute bottom-[5px] right-[50%] hover:!bg-[#3c3e40] rounded-full transform translate-x-[50%] mx-auto z-20 w-[40px] h-[40px]'
				onClick={()=>setShow(!show)}
			>
				<BlackHoverS show={show}>
					<div className=' p-[10px]'>
						<img src={arrowRight} alt='arrow' className='w-[20px] transform duration-500 transition-all' />
					</div>
				</BlackHoverS>
			</div>

		</div>
	);
};

export default RightSideBar;