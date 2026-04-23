import mongoose from "mongoose"

const connectDB = async () => {
    //1) DB is always in another continent (use async await it may take time)
    //2) DB connection can fail (It may throw error, handle them)

    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`MongoDB connected : ${conn.connection.host}`)
}

export default connectDB