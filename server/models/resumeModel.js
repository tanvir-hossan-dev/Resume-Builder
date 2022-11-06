const mongoose = require("mongoose");
const resumeSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  employmentHistory: {
    emPositionName: String,
    emStartDate: String,
    emEndDate: String,
  },
  education: {
    collageName: {
      type: String,
      required: true,
    },
    degree: {
      type: String,
      required: true,
    },
    passingYear: {
      type: String,
      required: true,
    },
  },
  links: {
    website: {
      type: String,
      required: true,
    },
    facebook: {
      type: String,
      required: true,
    },
    linkedIn: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    twitter: {
      type: String,
      required: true,
    },
  },
  addSkills: {
    type: String,
    required: true,
  },
  internship: {
    internPosition: String,
    internCompnay: String,
    internStartDate: String,
    internEndDate: String,
  },
  reference: {
    refName: String,
    refCompnay: String,
    refPosition: String,
    refEmail: String,
    refPhone: Number,
  },
});

const resumeModel = mongoose.model("resume", resumeSchema);

module.exports = resumeModel;
