import express from 'express';

const app = express();

app.get('/users', (req, res)=>{
    const users = [
        {name: "Seo Dartinho", age: 33},
        {name: "Onizuka", age: 33}
    ]
    return res.json(users);
})
//localhost:3333
app.listen(3333);



