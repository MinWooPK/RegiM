import React from 'react';
import './App.css';
// import Navbar from './components/Navbar';
import logo from './icon_SVG/Logomark.svg';
import RegiM from './icon_SVG/RegiM.svg';
import ellipse from './icon_SVG/Ellipse.svg';
import desktop from './icon_SVG/video-thumbnail.svg'



import Button from './components/Button';
import Text from './components/Text';
// import { text } from 'stream/consumers';

function App() {
  return (
    <div className="App">
      <div className="flex flex-row justify-between mt-[20px] mx-[20px]">
        <div className='flex flex-row items-center justify-center'>
          <img src={logo} alt="" />
          <img src={RegiM} alt="" /></div>
        <div>  <Button label="Get Early Access" className="w-40 md:w-64 py-2.5 px-4 bg-[#0876DD] rounded-md text-[white]" /></div>
      </div>

      {/* Header */}
      <div className='pt-[68px] '>
        <div className='flex flex-col text-start mx-5 '>
          <Text text="Event Registration Reimagined" type='semibold' className='text-4xl' />
          <Text text="Manage your event registrations hassle free and without any dependency with the technical team. Isn’t it sounds amazing?" type='regular' className='text-base pt-4 pb-10' />
          <Button label="Get Early Access" className="w-40  py-3 px-4 bg-[#0876DD] rounded-md text-[white]" />
        </div>
        <div className='mt-6'>
          <img src={ellipse} className="relative left-20" alt="" />
        </div>
      </div>

      <div className='h-0.5 w-full  mt-20 mb-14 bg-Primary/600' > </div>
      <div className='flex flex-col gap-14 items-center'>
        <div className='flex flex-col gap-1'>
          <Text text='All-in-one Event Platform' type='semibold' className='text-4xl' />
          <Text text='Deliver an exceptional event experience' type='regular' className='text-base' />
        </div>
        <div>
          <img src={desktop} alt="" />
          <button className='rounded-full bg-Primary/600  -top-4 relative z-10'>
          <Text text='See in action (2min)' type='medium' className='text-sm' />


          </button>
        </div>
        <div></div>
      </div>



    </div>

  );
}

export default App;
