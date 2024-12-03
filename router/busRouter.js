import express from 'express';
import { createBus, deleteBus, getBuss, update_arrival_time, updateBus, updateBusNumber, updateBuss_time } from '../controller/BusController.js';
import  {verifyToken}  from '../middleware/auth.js';
const rotuer = express.Router();
rotuer.post('/registerbus', createBus);
rotuer.get('/bus',verifyToken, getBuss);
rotuer.delete('/bus/:id', verifyToken, deleteBus);
rotuer.put('/bus/:id',verifyToken, updateBus);
rotuer.put('/bus/Number/:id',verifyToken, updateBusNumber);
rotuer.put('/bus/times/:id',verifyToken, updateBuss_time);
rotuer.put('/bus/time/:id',verifyToken, update_arrival_time);


export const RouterBus = rotuer;
