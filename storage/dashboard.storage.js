import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    personalInfo: {
      fullName: { type: String, required: true },
      dateOfBirth: { type: Date, required: true },
      gender: {
        type: String,
        required: true,
      },
      contactInfo: {
        phone: { type: String, required: true },
        email: { type: String, required: true },
      },
      emergencyContact: {
        name: { type: String },
        relationship: { type: String },
        phone: { type: String },
      },
    },

    medicalHistory: {
      pastIllnesses: { type: Array },
      surgeries: 
        {
          procedure: { type: String },
          date: { type: Date },
          hospital: { type: String },
        },
      chronicConditions: [{ type: String }],
      familyHistory: [{ type: String }],
      allergies: {
        food: [{ type: String }],
        medications: [{ type: String }],
        environmental: [{ type: String }],
      },
      immunizations: [
        {
          vaccine: { type: String },
          date: { type: Date },
        },
      ],
    },

    medications: {
      current: 
        {
          name: { type: String },
          dosage: { type: String },
          frequency: { type: String },
        },
      past: [
        {
          name: { type: String },
          dosage: { type: String },
          duration: { type: String },
        },
      ],
    },

    lifestyle: {
      smoking: { type: Boolean, default: false },
      alcoholConsumption: {
        type: String,
        enum: ["None", "Occasional", "Regular"],
      },
      physicalActivity: { type: String },
      diet: { type: String },
    },

    medicalReports: {
      labResults:
        {
          testName: { type: String },
          result: { type: String },
          date: { type: Date },
        },
      imagingReports: [
        {
          type: { type: String },
          result: { type: String },
          date: { type: Date },
        },
      ],
      doctorsNotes: [{ type: String }],
      prescriptions: [{ type: String }],
      dischargeSummaries: [{ type: String }],
    },

    vitals: {
      bloodPressure: {
        systolic: { type: Number },
        diastolic: { type: Number },
      },
      bloodSugar: { type: Number },
      weight: { type: Number },
      height: { type: Number },
      heartRate: { type: Number },
    },

    symptoms:
      {
        symptom: { type: String },
        location: { type: String },
        severity: { type: Number, min: 1, max: 10 },
        duration: { type: String },
      },

    allergyTests: {
      foodAllergies: [{ type: String }],
      medicationAllergies: [{ type: String }],
      environmentalAllergies: [{ type: String }],
    },

    insuranceDetails: {
      provider: { type: String },
      policyNumber: { type: String },
      validity: {
        startDate: { type: Date },
        endDate: { type: Date },
      },
    },

    lifestyleGoals: {
      weightLoss: { type: Boolean, default: false },
      fitness: { type: Boolean, default: false },
      dietaryChanges: { type: Boolean, default: false },
    },

    emergencyInfo: {
      bloodType: { type: String },
      organDonor: { type: Boolean, default: false },
      treatmentPreferences: { type: String },
    },

    primaryCarePhysician: {
      name: { type: String },
      contactInfo: { type: String },
    },
  },
  { timestamps: true }
);

const Patient = mongoose.model("Patient", patientSchema);

export default Patient;
