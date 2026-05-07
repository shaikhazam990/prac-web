import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import app from './src/app.js';

dotenv.config();

connectDB();

const Port = 3000;

app.listen(Port, ()=>{
    console.log(`Server is running on port ${Port}`);
})

