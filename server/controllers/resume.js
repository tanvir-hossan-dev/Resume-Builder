const resumeModel = require("../models/resumeModel");

exports.deleteResuem = async (req, res) => {
  try {
    const { id } = req.params;
    await resumeModel.findByIdAndDelete(id);
    res.status(203).json({ message: "Delete Resume" });
  } catch (e) {
    console.log(e);
  }
};

exports.updateResume = async (req, res) => {
  try {
    const { id } = req.params;
    let resume = await resumeModel.findById(id);

    if (!resume) res.status(400).json({ message: "Resume not found" });
    resume = await resumeModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(201).json(resume);
  } catch (err) {}
};

exports.getResume = async (req, res) => {
  try {
    const resumeData = await resumeModel.find({});
    res.status(200).json(resumeData);
  } catch (e) {
    console.log(e);
  }
};

exports.postResume = async (req, res) => {
  try {
    const resumeData = new resumeModel(req.body);
    await resumeData.save();
    res.status(200).json(resumeData);
  } catch (e) {
    console.log(e);
  }
};
