import express, { json } from "express";
import productsRouter from "./api/routes/productsRoutes.js";
import dbConnection from "./api/db/index.js";
import categoryRouter from "./api/routes/categoryRoutes.js";
import subCategoryRouter from "./api/routes/subCategoryRoutes.js";
import carrouselRouter from "./api/backoffice/routes/carrouselRoutes.js";
import { handler as ssrHandler } from "./dist/server/entry.mjs";
import dotenv from "dotenv";
import cors from "cors";
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
app.use("/", productsRouter);
app.use("/categories", categoryRouter);
app.use("/subCategories", subCategoryRouter);
app.use("/carrousel", carrouselRouter);

app.use(express.static("dist/client/"));
app.use("/uploads", express.static("uploads"));
app.use(ssrHandler);

app.listen(PORT, () =>
  console.log(`Server started on port ${process.env.PORT}`)
);
