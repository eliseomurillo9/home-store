import express, { json } from "express";
import productsRouter from './api/routes/productsRoutes.js';
import dbConnection from './api/db/index.js';
import categoryRouter from './api/routes/categoryRoutes.js';
import subCategoryRouter from './api/routes/subCategoryRoutes.js';
import { handler as ssrHandler } from './dist/server/entry.mjs';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
// const PORT = 5000;

dbConnection();
// app.get("/api/test", (req, res) => {
    //   res.send("Home store HELLOOOO");
    // });
    
app.use(json()); // for parsing application/json
app.use('/products', productsRouter);
app.use('/categories', categoryRouter);
app.use('/subCategories', subCategoryRouter);
app.use(express.static('dist/client/'));
app.use('/store', ssrHandler);


app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`));


