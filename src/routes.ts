import express from 'express';
import db from './database/connection';

const routes = express.Router();


routes.post('/classes', async (req, res)=>{
    const {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule
    } = req.body;

    const insertedUsersId = await db('users').insert({name,
        avatar,
        whatsapp,
        bio
    });

    const user_Id = insertedUsersId[0];

    await db('classes').insert({
        subject,
        cost,
        user_Id
    });

    return res.send();
})
 

export default routes;


