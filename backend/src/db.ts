import mongoose from "mongoose";

mongoose.connect(Bun.env.MONGODB_URI);

const userSchema = new mongoose.Schema({
   name: {
    type: String,
    required: true,
    trim: true,
    maxLength: 30,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 20,
  },
   email: {
    type: String,
    required: true,
    trim: true,
    maxLength: 30,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  }
});

const User = mongoose.model("User", userSchema);

console.log("Mongoose connected successfully!");

export default User;
