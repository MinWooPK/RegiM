import React from 'react';
import './App.css';
// import Navbar from './components/Navbar';
import logo from './icon_SVG/Logomark.svg';
import RegiM from './icon_SVG/RegiM.svg'
import Button from './components/Button';


function App() {
  return (
    <div className="App">
      <div className="flex flex-row justify-between mt-[20px] mx-[20px]">
        <div className='flex flex-row items-center justify-center'>
          <img src={logo} alt="" />
          <img src={RegiM} alt="" /></div>
        <div>  <Button label="Get Early Access" /></div>
      </div>


      <div className=''>
        <div >
          <h1>Event Registration Registration Reimagined</h1>
          <p>Manage your event registrations hassle free and without any dependency with the technical team. Isn’t it sounds amazing?</p>
        </div>

      </div>
      {/* <h1 className="text-3xl font-bold underline text-rose-600" > 
      Simple React Typescript Tailwind Sample
    </h1>
    <h1 className='text-rose-600'>hello</h1> */}
    </div>

  );
}

export default App;
