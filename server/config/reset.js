import { pool } from "./database.js";
import './dotenv.js';
import events from "../data/events.js";

const createEventsTable = async () => {
  const createTableQuery = `
        DROP TABLE IF EXISTS events;

        CREATE TABLE IF NOT EXISTS events (
            id SERIAL PRIMARY KEY,
            url VARCHAR(255),
            title VARCHAR(255) NOT NULL,
            time VARCHAR(255) NOT NULL,
            location VARCHAR(255) NOT NULL,
            dresscode VARCHAR(255) NOT NULL
        )
    `;

  try {
    const res = await pool.query(createTableQuery);
    console.log("events table created successfully.");
  } catch(error) {
    console.error("Error creating events table", error);
  }
}

const seedEventsTable = async () => {
  await createEventsTable();

  events.forEach((event) => {
    const insertQuery = {
      text: 'INSERT INTO events (url, title, time, location, dresscode) VALUES ($1, $2, $3, $4, $5)'
    }

    const values = [
        event.url,
        event.title,
        event.time,
        event.location,
        event.dressCode
    ];

    pool.query(insertQuery, values, (error, _) => {
      if (error) {
        console.error(`Error inserting event: ${event.title}`, error);
        return;
      }
      console.log(`${event.title} inserted successfully.`);
    });
  });
}

seedEventsTable().catch(console.error);