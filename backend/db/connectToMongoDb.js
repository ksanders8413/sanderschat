// import mongoose from 'mongoose'

// const connectToMongoDb = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_DB_URI)
//         console.log("connected to mongo db")
//     } catch (error) {
//         console.log("Error connecting to mongodb", error.message)
//     }
// }

// export default connectToMongoDb


import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_DB_URI);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;