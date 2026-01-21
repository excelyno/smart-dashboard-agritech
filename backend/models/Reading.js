import mongoose, { mongo } from 'mongoose';

const ReadingSchema = new mongoose.Schema({
    deviceId :{
        type: String,
        required: true
    },
    temperature: {
        type: Number,
        required: true
    },
    humidity:{
        type: Number,
        requierd: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('Reading', ReadingSchema)