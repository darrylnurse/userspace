import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const EditEvent = () => {

  const { id } = useParams();
  const [currentEvent, setEvent] = useState({
    id: 0,
    url: '',
    title: '',
    location: '',
    dressCode: ''
  });

  useEffect(() => {
    const fetchEventById = async () => {
      const response = await fetch(`/events/${id}`)
      const data = await response.json()
      setEvent(data)
    }

    fetchEventById().catch(console.error);
  }, [id])

  const handleChange = (event) => {
    const { name, value } = event.target

    setEvent((prev) => {
      return {
        ...prev,
        [name]:value,
      }
    })
  }

  const updateEvent = (event) => {
    event.preventDefault()

    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(currentEvent),
    }

    const response = fetch(`http://localhost:3001/events/${id}`, options);
    response.then(() => window.location = '/');
  }

  const deleteEvent = (event) => {
    event.preventDefault()

    const options = {
      method: 'DELETE'
    }

    const response = fetch(`http://localhost:3001/events/${id}`, options);
    response.then(() => window.location = '/');
  }

  return (
      <div>
        <center className={'py-10'}>
          <h2 className={'text-white text-3xl'}>Edit an Event</h2>
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

          <input className='submitButton' type='submit' value='Submit' onClick={updateEvent}/>
          <button className='deleteButton' onClick={deleteEvent}>Delete</button>
        </form>
      </div>
  )
}

export default EditEvent