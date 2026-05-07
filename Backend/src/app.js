import express from 'express';
import taskRoutes from './routes/task.routes.js';
import cors from 'cors';
const app = express();
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use('/api', taskRoutes);





export default app;

