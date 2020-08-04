import express from 'express';
import db from './database/connection';
import convertHoursToMinutes from './uteis/convertHoursToMinutes';

const routes = express.Router();

interface ScheduleItem{
    weekday: number;
    from: string;
    to: string;
};


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

    const trx = await db.transaction();

    try {
        const insertedUsersId = await trx('users').insert({name,
            avatar,
            whatsapp,
            bio
        });
    
        const user_id = insertedUsersId[0];
    
        const insertedClassesId = await trx('classes').insert({
            subject,
            cost,
            user_id
        });
    
        const class_id = insertedClassesId[0];
    
        const classSchedule = schedule.map((scheduleItem: ScheduleItem) =>{
            return {
                class_id,
                weekday: scheduleItem.weekday,
                from: convertHoursToMinutes(scheduleItem.from),
                to: convertHoursToMinutes(scheduleItem.to)
            };
    
        });
    
        await trx('class_schedule').insert(classSchedule);
    
        await trx.commit();
    
        return res.status(201).send();
    } catch (error) {
        await trx.rollback();
        console.log(error);
        return res.status(400).json({
            error: 'Unexpected error while creating new class'
        });
    }

    
})
 

export default routes;


