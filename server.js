import "dotenv/config" //It fetch all the environment variable and gives access to process.env
import app from "./src/app.js"
import connectDB from "./src/common/config/db.js"

const PORT = process.env.PORT || 1404

const start = async () => {
    //Database connection
    await connectDB()

    app.listen(PORT, () => {
        console.log(`Server is running on PORT : ${PORT}`)
    })
} 

start().catch(error => {
    console.error('Failed to start server : ', error)
    process.exit(1)
})