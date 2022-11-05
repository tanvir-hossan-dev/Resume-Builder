const router = require("express").Router();
const resumeRouter = require("../routes/resumeRouter");

router.use("/api/v1/resume", resumeRouter);

module.exports = router;
