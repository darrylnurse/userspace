import {useEffect, useState} from 'react';

const CreateEvent = () => {

  const [currentEvent, setEvent] = useState({
    url: '',
    title: '',
    location: '',
    time: '',
    dressCode: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setEvent( (prev) => {
      return {
        ...prev,
        [name]:value,
      }
    })
  }

  const createEvent = (event) => {
    event.preventDefault();

    if (!currentEvent.url || !currentEvent.title || !currentEvent.location || !currentEvent.time) {
      alert('Please fill in all the fields');
      return;
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(currentEvent),
    }

    const response = fetch('http://localhost:3001/events', options);
    response.then(() => window.location = '/');
  }

  useEffect(() => {
    console.log(currentEvent);
  }, [currentEvent]);

  return (
      <div>
        <center className={'py-10'}>
          <h2 className={'text-white text-3xl'}>Add an Event</h2>
        </center>
        <form className={"text-white px-48 pb-24"}>
          <label>Title</label><br/>
          <input className='text-inherit p-5' id='title' autoComplete='off' name='title'
                    value={currentEvent.title}
                    onChange={handleChange}></input>
          <br/>

          <label>Url</label> <br/>
          <input className='text-inherit' type='text' autoComplete='off' id='url' name='url' value={currentEvent.url}
                 onChange={handleChange}/><br/>
          <br/>

          <label>Location</label><br/>
          <input className='text-inherit' type='text' id='location' autoComplete='off' name='location'
                 value={currentEvent.location} onChange={handleChange}/><br/>
          <br/>

          <label>Time</label><br/>
          <input className='text-inherit' type='text' id='time' autoComplete='off' name='time' value={currentEvent.time}
                 onChange={handleChange}/><br/>
          <br/>

          <label>Dress Code</label><br/>
          <input className='text-inherit' type="text" id='dressCode' autoComplete='off' name='dressCode'
                 value={currentEvent.dressCode} onChange={handleChange}/><br/>
          <br/>

          <input type='submit' value='Submit' onClick={createEvent}/>
        </form>
      </div>
  )
}

export default CreateEvent