import express, { json } from 'express';
import axios from 'axios';
import cors from 'cors';
const app = express();

// Middleware
app.use(json());
app.use(cors());

app.get('/graph', (req, res) => {
    console.log("Hey bitch")
    res.send("hello")
})

app.post('/graph', async (req, res) => {
    const { cells } = req.body;
    try {
        const insertNewUser = await (await axios.post('http://localhost:4000/graph', {
            cells: cells
        })).data;
        res.status(201).json({
            message: 'User created',
            user: insertNewUser
        });
    } catch (error) {
        res.status(404).json({
            message: error.message,
        })
    }
})

app.listen(6000, () => console.log('Listening on port 6000...'));