import {Request, Response} from 'express';
import db from '../database/connection';

export default class ConnectionController{

    //async index(req: Request, res:Response){}

    async create(req: Request, res:Response){
        const {user_id} = req.body;


        try {
            await db('connections').insert({
                user_id
            });
    
            return res.status(200).send();
            
        } catch (error) {
            console.log(error);
            return res.status(400)
        }

       

    }
}