import express from 'express';
import db from './database/connection';

const routes = express.Router();

interface ScheduleItem{
    weekday: number,
    from: string,
    to: string
}


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

    const insertedClassesId = await db('classes').insert({
        subject,
        cost,
        user_Id
    });

    const class_Id = insertedClassesId[0];

    const classSchedule = schedule.map((scheduleItem: ScheduleItem) =>{
        weekday: scheduleItem.weekday,
        from: 

    })

    await db('schedule').insert({
        
        
        class_Id
    });

    return res.send();
})
 

export default routes;


