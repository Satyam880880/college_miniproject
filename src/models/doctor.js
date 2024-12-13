const mongoose = require('mongoose');

// Define the Doctor Schema
const doctorSchema = new mongoose.Schema({
    doctorId: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    specialization: {
        type: [String],
        required: true
    },
    yearsOfExperience: {
        type: Number,
        required: true
    },
    contact: {
        phone: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    },
    clinicAddress: {
        type: String,
        required: true
    },
    availability: {
        days: {
            type: [String], 
            required: true
        },
        timeSlots: {
            type: [String], 
            required: true
        }
    },
    consultationFee: {
        type: Number,
        required: true
    },
    ratings: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    },
    reviews: [
        {
            patientId: {
                type: String,
                required: true
            },
            reviewText: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                min: 1,
                max: 5,
                required: true
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
});


const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
