import express from 'express';
import cors from 'cors';
import 'dotenv/config';
const PORT = process.env.PORT || 5000;
import { clerkMiddleware } from '@clerk/express'
import { inngest, functions } from './inngest/index.js';
import { serve } from "inngest/express";

const app = express();
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware())

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.use("/api/inngest", serve({ client: inngest, functions }));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

