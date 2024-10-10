import React, {useState, useEffect, useMemo} from 'react'
import Event from '../components/Event';

const LocationEvents = ({index}) => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
      const getAllEvents = async () => {
        try {
          const response = await fetch('http://localhost:3001/events');
          const data = await response.json();
          setEvents(data);
        } catch (error) {
          console.error('Error fetching events:', error);
        }
      }
      getAllEvents().catch(console.error);
    }, [])

    const locations = useMemo(() => [
        'Mars',
        'Venus',
        'Jupiter',
        'Pluto'
    ], [])

    return (
        <div className='location-events'>
            <header className={"flex flex-col justify-center pt-8 items-center"}>
                <div className='location-image'>
                    <img
                        src={`/src/assets/${locations[index].toLowerCase()}.png`}
                        className={"h-[5rem]"}
                        alt={"location"}
                    />
                </div>

                <div>
                    <h2 className={'text-white'}>{locations[index]}</h2>
                    <p>{location.address}, {location.city}, {location.state} {location.zip}</p>
                </div>
            </header>

            <main className={"flex flex-col justify-center items-center"}>
                { events &&
                  events.length > 0 ? events
                    .filter(event => event.location === locations[index])
                    .map((event, index) =>
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.title}
                            dressCode={event.dressCode}
                            time={event.time}
                            url={event.url}
                        />
                    ) : <h2 className={"text-white text-center w-full"}><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}</h2>
                }
            </main>
        </div>
    )
}

export default LocationEvents