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

export default getEvents;