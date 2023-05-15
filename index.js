import express, { json } from "express";
import productsRouter from "./api/routes/productsRoutes.js";
import dbConnection from "./api/db/index.js";
import categoryRouter from "./api/routes/categoryRoutes.js";
import subCategoryRouter from "./api/routes/subCategoryRoutes.js";
import orderRoutes from "./api/routes/orderRoutes.js";
import contentManagerRoutes from './api/routes/cms/contentManagerRoutes.js'
import { handler as ssrHandler } from "./dist/server/entry.mjs";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

dbConnection();

app.use(json());
app.use(cors({
  origin:process.env.BASE_URL,
}));
app.get("/api/test", (req, res) => {
  res.send("Home store HELLOOOO");
});
app.use("/api/products", productsRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/subCategories", subCategoryRouter);
app.use("/api/orders", orderRoutes);
app.use("/api/admin/cms", contentManagerRoutes);

app.use("/uploads", express.static("uploads"));
app.use(express.static("dist/client/"));
app.use(ssrHandler);

// app.use(isAuthorized);


app.listen(PORT, () =>
  console.log(`Server started on port ${process.env.PORT}`)
);
