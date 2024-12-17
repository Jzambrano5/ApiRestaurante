import express, { Router } from 'express';
import  {verifyToken}  from '../middleware/auth.js';
import { updatePerson } from '../controller/PersonsController.js';

const router = express.Router();

router.put('/person/:id', verifyToken, updatePerson);

export default router;