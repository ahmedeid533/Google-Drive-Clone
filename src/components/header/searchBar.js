import React from 'react';
import magnifyingGlass from '../../assets/icons/magnify.svg';
import options from '../../assets/icons/options.svg';
import BlackHover from '../global/blackHover';
import WhiteHover from '../global/whiteHover';

const SearchBar = () => {
	return (
    <div className='relative'>
      <input type='text' placeholder='Search in Drive' className='bg-[#282a2c] w-[min(40vw,722px)] placeholder:text-[#d5d5d5] text-[17px] h-[48px] pl-[58px] font-medium rounded-full focus:outline-0 '/>
      <div className='absolute top-[50%] left-[9px] transform translate-y-[-50%]'>
        <BlackHover content='Search'>
          <div className='hover:bg-[#3c3e40] rounded-full p-[8px]'>
            <img src={magnifyingGlass} alt='Search' className='w-[24px]' />
          </div>
        </BlackHover>
      </div>
      <div className='absolute top-[50%] right-[9px] transform translate-y-[-50%]'>
        <WhiteHover content='Advanced Search'>
          <div className='hover:bg-[#3c3e40] rounded-full p-[8px]'>
            <img src={options} alt='Search' className='w-[24px]' />
          </div>
        </WhiteHover>
      </div>
    </div>
	);
	
};

export default SearchBar;