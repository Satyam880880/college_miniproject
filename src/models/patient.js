const mongoose = require('mongoose');

// Define the Patient Schema
const patientSchema = new mongoose.Schema({
    patientId: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
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
    address: {
        type: String,
        required: true
    },
    medicalHistory: [
        {
            date: {
                type: Date,
                required: true
            },
            condition: {
                type: String,
                required: true
            },
            treatment: {
                type: String
            }
        }
    ],
    currentMedications: {
        type: [String], // Array of strings
        default: []
    },
    emergencyContact: {
        name: {
            type: String,
            required: true
        },
        relationship: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create the Model
const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
