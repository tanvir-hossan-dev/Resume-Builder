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
    positionName: String,
    startDate: Number,
    endDate: Number,
  },
  education: {
    collageName: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
    passignYear: {
      type: Number,
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
    position: String,
    compnay: String,
    startDate: Number,
    endDate: Number,
  },
  reference: {
    name: String,
    compnay: String,
    position: String,
    email: String,
    phone: Number,
  },
});

const resumeModel = mongoose.model("resume", resumeSchema);

module.exports = resumeModel;
