import express from "express";
import { createClient } from 'redis';

const app = express();
const PORT = process.env.PORT || 8001;

const client = createClient();

client.on('error', err => console.log('Redis Client Error', err));

client.connect();

app.get("/jobs", async ( req, res ) => {
    const value = await client.get('jobs');
    console.log("value", value);
    res.header("Access-Control-Allow-Origin", "http://localhost:3001");
    return res.status(200).json(JSON.parse(value));
});

app.listen(PORT, () => {
    console.log("Express app up and running");
});