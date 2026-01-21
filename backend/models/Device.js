import mongoose, { mongo } from "mongoose";
const DeviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: String,
        enum: ['ON', 'OFF'],
        default: 'OFF'
    },
    lastUpdate: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('Device', DeviceSchema);