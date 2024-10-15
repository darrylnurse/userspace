import React, { useEffect, useState } from 'react';
import { useRoutes, Link } from 'react-router-dom';
import Locations from './pages/Locations'
import LocationEvents from './pages/LocationEvents'
import Events from './pages/Events';
import CreateEvent from "./pages/CreateEvent.jsx";
import EditEvent from "./pages/EditEvent.jsx";

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
    {
      path: '/events',
      element: <Events />
    },
    {
      path: '/new',
      element: <CreateEvent />
    },
    {
      path: '/edit',
      element: <EditEvent />
    }
  ])

  return (
      <div className='min-h-screen bg-[url("./assets/space-bg.jpg")] relative'>
        <header className=''>
          <h1 className={"w-full font-bold tracking-widest text-4xl font-mono p-8 text-center text-white"}>USERSPACE</h1>

          <div className='w-full flex flex-row gap-5 justify-center items-center'>
            <Link to='/' role='button'>Home</Link>
            <Link to='/events' role='button'>Events</Link>
            <Link to='/new' role='button'>Create Event</Link>
            <Link to='/edit/' role='button'>Edit Event</Link>
          </div>
        </header>

        <main>
          {element}
        </main>
      </div>
  );
};

export default App;