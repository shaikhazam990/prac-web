import express from 'express';

const app = express();
app.use(express.json());

app.get('/get', (req,res)=>{
    console.log("hello world");
    res.send("hello world");
})

export default app;

