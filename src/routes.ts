import express from 'express';
import ClassesController from './controllers/classController';
import ConnectionController from './controllers/connectionController';

const routes = express.Router();

const classesController = new ClassesController();
const connectionsController = new ConnectionController


routes.post('/classes', classesController.create );
routes.get('/classes', classesController.index );

routes.post('/connections', connectionsController.create);




 

export default routes;


