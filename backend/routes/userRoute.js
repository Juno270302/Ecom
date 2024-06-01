import express from "express";
import {
  createUser,
  loginUser,
  profileUser,
  logoutUser,
  updateProfileUser,
  updateAddressUser,
} from "../controllers/userController.js";
import { checkUserAuthenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").post(createUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

router
  .route("/profile")
  .get(checkUserAuthenticate, profileUser)
  .put(checkUserAuthenticate, updateProfileUser);

router.route("/profile/address").put(checkUserAuthenticate, updateAddressUser);

export default router;
