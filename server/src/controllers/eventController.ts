import { create } from 'domain';
import { Event } from '../models/eventModel';
import {
  createDoc,
  deleteDoc,
  getDoc,
  getDocs,
  updateDoc,
} from './crudControllers';

exports.getEvents = getDocs(Event);
exports.getEvent = getDoc(Event);
exports.createEvent = createDoc(Event);
exports.updateEvent = updateDoc(Event);
exports.deleteEvent = deleteDoc(Event);
