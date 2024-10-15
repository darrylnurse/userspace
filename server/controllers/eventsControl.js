import { pool } from '../config/database.js';
import '../config/dotenv.js';

const getEvents = async (_, response) => {
  const eventsQuery = `
        SELECT * FROM events ORDER BY id ASC
    `;

  try {
    const data = await pool.query(eventsQuery);
    response.status(200).json(data.rows);
  } catch (error) {
    response.status(409).json({
      error: error.message
    });
  }
}

const getEventById = async (request, response) => {
  const id = parseInt(request.params.id);

  if(isNaN(id) || id <= 0) {
    return response.status(400).json({ error: "Invalid event ID" });
  }

  try {
    const singleQuery = `
      SELECT * FROM events WHERE id = $1;
    `;

    const result = await pool.query(singleQuery, [id]);
    if(result.rows.length === 0) {
      return response.status(404).json({ message: "Event not found" });
    }
    response.status(200).json(result.rows[0]);
  } catch(error) {
    response.status(409).json({ error: error.message });
  }
}

const createEvent = async (request, response) => {
  try {
    const { url, title, location, time, dressCode } = request.body;
    const insertQuery = `
        INSERT INTO events (url, title, location, time,  dresscode) 
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *`;

    const results = await pool.query(insertQuery, [url, title, location, time, dressCode]);
    response.status(201).json(results.rows[0]);
  } catch(error) {
    console.error('Error creating event:', error);
    response.status(409).json({ error: error.message });
  }
}

const updateEvent = async (request, response) => {
  try {
    const id = parseInt(request.params.id);
    const { url, title, location, time, dressCode } = request.body;
    const updateQuery = `
     UPDATE events SET
        url = $1,
        title = $2,
        location = $3,
        time = $4,
        dresscode = $5,
     WHERE id = $6
    `;

    const results = await pool.query(updateQuery, [url, title, location, time, dressCode, id]);
    response.status(200).json(results.rows[0]);
  } catch(error) {
    response.status(409).json({ error: error.message });
  }
}

const deleteEvent = async (request, response) => {
  try {
    const id = parseInt(request.params.id);
    const deleteQuery = `DELETE FROM events WHERE id = $1`;

    const results = await pool.query(deleteQuery, [id]);
    response.status(200).json(results.rows[0]);
  } catch(error) {
    response.status(409).json({ error: error.message });
  }
}

export {
  getEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent
};