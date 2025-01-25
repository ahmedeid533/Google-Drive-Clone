import Header from './components/header';
import LeftSidebar from './components/leftSidebar';
import Main from './components/main';
import RightSideBar from './components/rightSideBar';
import Details from './components/details';

function App() {
  return (
    <div className="">
      <Header />
			<main className='flex flex-row '>
				<LeftSidebar />
				<Main />
				{/* <LeftSidebar /> */}
				<Details />
				<RightSideBar />
				
			</main>
    </div>
  );
}

export default App;
