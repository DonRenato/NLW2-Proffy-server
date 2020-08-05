import express from 'express';
import ClassesController from './controllers/classController';
const routes = express.Router();

const classesController = new ClassesController();


routes.post('/classes', classesController.create );
routes.get('/classes', classesController.index );


 

export default routes;


