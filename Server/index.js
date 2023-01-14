import express, { application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import connect from "./config/db.js";
const app = express();
const port = process.env.PORT || 4040
app.use(express.json)

dotenv.config()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(helmet())
app.use(cors())
application.use(morgan("common"))


app.listen(port, async() => {
    await connect(); //connecting with database
    console.log(`Listening on port: ${port}`)
})

