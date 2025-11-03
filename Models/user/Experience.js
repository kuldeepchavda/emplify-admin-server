const mongoose = require("mongoose")

const experienceSchema = mongoose.Schema(
    {
        userId: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
        position: { type: String },
        company: { type: String },
        salary: { type: String },
        startDate: { type: Date },
        endDate: { type: Date },
        description: { type: String },
    },
    { timestamps: true }
)

module.exports = mongoose.model(process.env.EXPERIENCE_DATABASE, experienceSchema);