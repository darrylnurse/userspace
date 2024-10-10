import React, { useEffect, useState } from 'react';
import { useRoutes, Link } from 'react-router-dom';
import Locations from './pages/Locations'
import LocationEvents from './pages/LocationEvents'
// import Events from './pages/Events';

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Locations />
    },
    {
      path: '/mars',
      element: <LocationEvents index={0} />
    },
    {
      path: '/venus',
      element: <LocationEvents index={1} />
    },
    {
      path: '/jupiter',
      element: <LocationEvents index={2} />
    },
    {
      path: '/pluto',
      element: <LocationEvents index={3} />
    },
    // {
    //   path: '/events',
    //   element: <Events />
    // }
  ])

  return (
      <div className='w-screen min-h-screen bg-[url("./assets/space-bg.jpg")] relative'>
        <header className=''>
          <h1 className={"w-full font-bold tracking-widest text-4xl font-mono p-8 text-center text-white"}>USERSPACE</h1>

          <div className='w-full flex flex-row gap-5 justify-center items-center'>
            <Link to='/' role='button'>Home</Link>
            <Link to='/events' role='button'>Events</Link>
          </div>
        </header>

        <main>
          {element}
        </main>
      </div>
  );
};

export default App;