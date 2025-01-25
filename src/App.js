
import { useEffect } from 'react';
import $ from 'jquery';
import Header from './components/header';
import LeftSidebar from './components/leftSidebar';
import Main from './components/main';
import RightSideBar from './components/rightSideBar';
import Details from './components/details';

function App() {
	useEffect(() => {
		if ($('body').width() < 480) {
			alert('This app is not compatible with mobile devices please use a desktop or laptop for better experience');
		}
	}, []);
  return (
    <div className="">
      <Header />
			<main className='flex flex-row '>
				<LeftSidebar />
				<Main />
				<Details />
				<RightSideBar />
			</main>
    </div>
  );
}

export default App;
