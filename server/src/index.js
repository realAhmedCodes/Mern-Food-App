import express from "express";

import cors from "cors";
import mongoose from "mongoose";
import {userRouter} from './routes/users.js'
import { recipesRouter } from "./routes/recipes.js";

const app = express();
app.use(express.json())
app.use(cors());

app.use("/auth", userRouter)
app.use("/recipes", recipesRouter);


mongoose.connect(
  "mongodb+srv://ahmed:recipecode@mernrecipe.5by2tjm.mongodb.net/mernrecipe?retryWrites=true&w=majority"
);

app.listen(3004, ()=>console.log("Server Running!!"))