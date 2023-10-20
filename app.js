import express from 'express';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import ErrorMiddleware from './middlewares/Error.js';


config({
    path: "./config/config.env",
});
const app = express();

app.use(express.json());
app.use(cookieParser());

// importing routes here 
import userRoutes from './routes/userRoutes.js';
import buyerRoutes from './routes/buyerRoutes.js';
import sellerRoutes from './routes/sellerRoutes.js';

app.use('/api/auth/', userRoutes);
app.use('/api/buyer/', buyerRoutes);
app.use('/api/seller/', sellerRoutes);


app.get('/', (req, res) => {
    res.send('<h1>Server Is Working</h1>');
})

export default app;

app.use(ErrorMiddleware);

