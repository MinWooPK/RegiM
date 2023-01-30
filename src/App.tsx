import React from 'react';
import './App.css';
import logo from './icon_SVG/Logomark.svg';
import RegiM from './icon_SVG/RegiM.svg';
import desktop from './icon_SVG/video-thumbnail.svg'
import playIcon from './icon_SVG/play-icon.svg'

import ItemIcon from './components/FeatureItem';
import Button from './components/Button';
import Text from './components/Text';
import LogoIcon from './components/Logo';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">

      {/* Navbar */}

      <div className="flex flex-row justify-between mt-[20px] mx-[20px] md:mx-[40px] lg:mx-[112px] ">
        <div className='flex flex-row items-center justify-center'>
          <img src={logo} alt="logo" />
          <img src={RegiM} alt="RegiM" /></div>
        <div className='relative'>
          <Button label="Get Early Access" className="w-40 md:w-64 py-2.5 px-4 bg-[#0876DD] rounded-md text-[white]" /></div>
      </div>

      {/* Header */}

      <div className='pt-[68px] md:pt-[100px] xl:flex xl:flex-row '>
        <div className='flex flex-col text-start mx-5 md:ml-10 md:mr-[136px]  lg:mx-[112px]'>
          <Text text="Event Registration Reimagined" type='semibold' className='text-4xl md:text-6xl text-Neutral/900' />
          <Text text="Manage your event registrations hassle free and without any dependency with the technical team. Isn’t it sounds amazing?" type='regular' className='text-base md:text-lg pt-4 pb-10 text-Neutral/700' />
          <Button label="Get Early Access" className="w-40  py-3 px-4 bg-[#0876DD] rounded-md text-[white] lg:z-10" />
        </div>
        <div className='mt-6 relative'>
          <div className='bg-Secondary/100	 
             h-[400px] w-[400px]
              rounded-full
             left-[80px] absolute 
             md:h-[700px] md:w-[700px] md:left-[156px] md:bottom-12
             lg:z-[-1]
            lg:left-[-120px] lg:bottom-[200px]
             
             '>
          </div>
          <div className='relative flex flex-row items-start gap-4 mx-5 md:mx-[72px] md:gap-[25px]'>
            <div className='flex flex-col gap-4 mt-20'>
              <Cards typeCard='Badge' />
              <Cards typeCard='RegistragionGraph' />
            </div>
            <div className='flex flex-col gap-4 mt-14'>
              <Cards typeCard='SpeakerCard' />
              <Cards typeCard='RegistrationSplit' />
              <Cards typeCard='ticket' />
            </div>
            <div className='flex flex-col gap-4 mt-24 md:mt-32'>
              <Cards typeCard='ticketSale' />
              <Cards typeCard='attendees' />
            </div>
          </div>
        </div>
      </div>
      {/* Features */}

      <div className='h-0.5   mt-20 mb-14 bg-Neutral/200 mx-5' > </div>
      <div className='flex flex-col gap-14 items-center'>
        <div className='flex flex-col gap-1 md:gap-2'>
          <Text text='All-in-one Event Platform' type='semibold' className='text-4xl md:text-5xl lg:text-[56px] text-Neutral/900' />
          <Text text='Deliver an exceptional event experience' type='regular' className='text-base md:text-lg text-Neutral/700' />
        </div>

        <div className='flex flex-col items-center'>
          <img src={desktop} alt="" className='rounded-2 md:w-[688px] lg:w-[768px]' />
          <button className='rounded-full  bg-White -top-4 relative 
          flex 
          gap-3 
          py-3 pr-4 pl-3  md:py-4 md:pr-5 md:pl-4'>
            <img src={playIcon} alt="playIcon" className='w-5 md:w-6' />
            <Text text='See in action (2min)' type='medium' className='text-sm md:text-base' />
          </button>
        </div>
        <div className='flex  flex-col  gap-12 md:flex-row md:gap-6 ' >
          <ItemIcon type='Event' color='Secondary/100' texth1='Event Metrics' textp='Track your ticket sales, attendees count and more with much ease.' />
          <ItemIcon type='Registration' texth1='Registration & Ticketing' textp='Manage your Event registrations and ticket sales easier and receive payments instantly.' />
          <ItemIcon type='Branded' color='Secondary/100' texth1='Branded Badges' textp='Create your custom branded badges for your events and get them printed.' />
          <ItemIcon type='Organaiser' texth1='Oragniser App' textp='Manage your events at the palm of your hand with our Oragniser App.' />
          <ItemIcon type='Attendee' color='Secondary/100' texth1='Attendee Engagement' textp='Engage with your attendees via email, surveys and much more.' />
          <ItemIcon type='Calendar' texth1='Add to Calendar' textp='Effortless way to add your events to registered users calendars by 1-click.' />
        </div>
      </div>


      {/* Integration */}

      <div className='h-[1px]   mt-20 mb-14 bg-Neutral/200 mx-5 lg:mx-[105px]  ' >
        <div className='bg-Secondary/100 h-[151px] rounded-b-full  mx-4 md:h-[311px] lg:h-[380px] lg:w-[720px] lg:mx-8 z-[-1]'></div>
      </div>

      <div className='lg:flex lg:mx-[50px]   '>
        <div className='flex flex-col  gap-4 mx-5 md:mx-[88px] lg:mt-10  lg:text-start lg:ml-[94px]  lg:mx-0  '>
          <Text text='Integrate with your favourite tools ' type='semibold' className='text-4xl md:text-5xl ' />
          <Text text='Connect RegiM with your most favorite sales and marketing tools' type='regular' className='text-base md:text-lg  ' />
        </div>
        <div className='flex flex-wrap items-center justify-center gap-8 mx-5
            mt-10 mb-16  md:mt-20 md:mx-24 md:gap-[72px] lg:mt-0 lg:mb-[236px] lg:mx-0  z-10'>

          <LogoIcon type='Rainbow' />
          <LogoIcon type='GP' />
          <LogoIcon type='Monkey' />
          <LogoIcon type='Iluminati' />

          <LogoIcon type='Sun' />
          <LogoIcon type='Group' />
          <LogoIcon type='Frame' />


        </div>
      </div>

      {/* CTA */}

      <div className='flex flex-col gap-4 px-5 pt-16 items-center bg-Neutral/900 '>
        <Text text='Create your event with RegiM' type='semibold' className='text-3xl md:text-4xl lg:text-5xl text-White' />
        <Text text='Leveraging our virtual and live event experience, Hubilo offers everything you need to set up your next hybrid event from registration to executing a flawless event'
          type='regular' className=' text-base md:text-lg md:mx-6 text-White lg:mx-[300px]' />
        <Button label="Get Early Access" className="w-40  py-3 px-4 bg-[#0876DD] rounded-md
        mt-6 mb-16 md:mb-[100px]
        text-[white]" />
      </div>

      {/* Footer */}

      <div className='bg-Neutral/900 pt-3'>
        <div className='mx-5 xl:mx-[112px]'>
          <div className='h-[1px] w-full bg-Neutral/200
         flex flex-col items-center '>
            <img src={logo} alt="logoFooter" className='z-10 -top-3 relative px-8 bg-Neutral/900' />
          </div>
        </div>
        <div className='flex flex-col items-center mt-12 pb-10 gap-4  xl:flex-row xl:justify-between xl:mx-[112px]'>
          <div className='flex flex-row'>
            <Text text='© RegiM 2022. Made with love by ' secondText='Landify' type='medium' className='text-sm text-Neutral/400' />
          </div>
          <div>
            <Text text='For further details, drop a mail to ' secondText='hello@landify.design' type='medium' className='text-sm  text-Neutral/400' />
          </div>
        </div>
      </div>

    </div>

  );
}

export default App;
