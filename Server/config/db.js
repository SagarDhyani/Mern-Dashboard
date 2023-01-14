import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()
mongoose.set("strictQuery", false);

const connect = () => {
    return mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

export default connect