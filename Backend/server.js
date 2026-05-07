import app from './src/app.js';

const Port = 3000;

app.listen(Port, ()=>{
    console.log(`Server is running on port ${Port}`);
})

