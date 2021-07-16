
// app.get('/api/tasks')         -- Get all tasks
// app.post('/api/tasks')        -- Create a task
// app.get('/api/tasks/:id')     -- Get a single task
// app.patch('/api/tasks/:id')   -- Update a task
// app.delete('/api/tasks/:id')  -- Delete a task

// INSTALL EXPRESS
const express = require('express');
const app = express();
require('dotenv').config();
// DATABASE CONNECT
const connectDB = require('./database/connect');
// GET ROUTES
const tasks = require('./routes/tasks');
// GET MIDDLEWARE
app.use(express.static('public'));
app.use(express.json());
// ROOT PATH
app.use('/api/v1/tasks', tasks);
// CONNECT TO DATABASE AND START SERVER
const port = 3500;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_DB);
        app.listen(port, console.log(`The server is now running on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}
start();
