import express from "express";

import "dotenv/config";
import Lab5 from "./Lab5.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
Lab5(app);
app.listen(4000);


export default app;
