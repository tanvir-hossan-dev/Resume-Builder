const { getResume, postResume, updateResume, deleteResuem } = require("../controllers/resume");

const router = require("express").Router();

router.put("/resumeupdate/:id", updateResume);
router.delete("/resumedelete/:id", deleteResuem);
router.get("/", getResume);
router.post("/post", postResume);

module.exports = router;
