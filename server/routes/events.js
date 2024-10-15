import express from "express";
import {
  getEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent
} from "../controllers/eventsControl.js";

const router = express.Router();

router.get('/', getEvents);

router.get('/:eventId', getEventById);

router.post('/', createEvent);

router.patch('/:id', updateEvent);

router.delete('/:id', deleteEvent);


export default router;