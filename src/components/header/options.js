import React,{ useState } from 'react';
import apps from '../../assets/icons/apps.svg';
import settinges from '../../assets/icons/settings.svg';
import help from '../../assets/icons/help.svg';
import offline_pin from '../../assets/icons/offline_pin.svg';
import WhiteHover from '../global/whiteHover';
import gif from '../../assets/gifs/gemini.gif'
import gemini from '../../assets/icons/gemini.svg';
import BlackHover from '../global/blackHover';
import me from '../../assets/images/myRegPhotoSocial.png';
import BlackHoverAccount from './blackHoverAccount';

const Options = () => {
	
	const [src, setSrc] = useState(gemini);
	return (
		<div className='flex flex-row items-center ml-auto min-w-[275px] gap-[4px]'>
			<WhiteHover content='Ready for offline'>
				<div className='hover:bg-[#3c3e40] rounded-full p-[8px]'>
					<img src={offline_pin} alt='Ready for offline' className='w-[24px]' />
				</div>
			</WhiteHover>
			<WhiteHover content='Support'>
				<div className='hover:bg-[#3c3e40] rounded-full p-[8px]'>
					<img src={help} alt='Support' className='w-[24px]' />
				</div>
			</WhiteHover>
			<WhiteHover content='Settinges'>
				<div className='hover:bg-[#3c3e40] rounded-full p-[8px]'>
					<img src={settinges} alt='settinges' className='w-[24px]' />
				</div>
			</WhiteHover>
			<WhiteHover content='Try Gemini'>
				<img onMouseEnter={()=>setSrc(gif)} onMouseLeave={()=>setSrc(gemini)} src={src} alt='Google Drive' className='w-[48px] ml-[auto]' />
			</WhiteHover>
			<BlackHover content='Google apps'>
				<div className='hover:bg-[#3c3e40] rounded-full p-[8px]'>
					<img src={apps} alt='apps' className='w-[24px]' />
				</div>
			</BlackHover>
			<div className='mr-[3px]'>
				<BlackHoverAccount content='Google Account'>
					<div className='hover:bg-[#3c3e40] rounded-full p-[6px]'>
						<img src={me} alt='apps' className='w-[32px] h-[32px] object-cover rounded-full' />
					</div>
				</BlackHoverAccount>
			</div>

		</div>
	);
};

export default Options;