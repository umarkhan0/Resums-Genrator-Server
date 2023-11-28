import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    vrifycode: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});
UserSchema.index({ name: 1 }, { expireAfterSeconds: true });
const User = mongoose.model("User", UserSchema);

export default User;
