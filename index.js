import express, { json } from "express";
import productsRouter from "./api/routes/productsRoutes.js";
import dbConnection from "./api/db/index.js";
import categoryRouter from "./api/routes/categoryRoutes.js";
import subCategoryRouter from "./api/routes/subCategoryRoutes.js";
import contentManagerRoutes from './api/routes/cms/contentManagerRoutes.js'
import { handler as ssrHandler } from "./dist/server/entry.mjs";
import config from './api/auth/authConfig.js'
import dotenv from "dotenv";
import cors from "cors";
import { isAuthorized } from "./api/auth/auth.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

dbConnection();

app.use(json());
app.use(cors({
  origin:'http://localhost:5000'
}));
app.get("/api/test", (req, res) => {
  res.send("Home store HELLOOOO");
});
app.use(express.static("dist/client/"));
app.use("/", productsRouter);
app.use("/categories", categoryRouter);
app.use("/subCategories", subCategoryRouter);

app.use("/uploads", express.static("uploads"));
app.use(ssrHandler);

app.use(isAuthorized);
app.use("/admin/cms", contentManagerRoutes);


app.listen(PORT, () =>
  console.log(`Server started on port ${process.env.PORT}`)
);
