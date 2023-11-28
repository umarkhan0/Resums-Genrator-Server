import express from "express";
const router  = express.Router();
import postReq from "./signUp.js";
import getAllusers from "./alluserget.js"
import putReq from "./login.js";
import verify from "./optvalidate.js";
import alldata from "./alldataResumepost.js"
router.use("/login" , putReq);
router.use("/verify" , verify);
router.use("/signup" , postReq);
router.use("/allpost" , alldata);
router.use("/allget" , getAllusers);
export default router;