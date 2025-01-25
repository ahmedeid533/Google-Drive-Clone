import React from 'react';
import SearchBar from './header/searchBar';
import Logo from './header/logo';
import Options from './header/options';

const Header = () => {
	return (
		<header className='flex flex-row items-center h-[64px] p-[8px]'>
			<Logo />
			<SearchBar />
			<Options />
		</header>
	);
};

export default Header;