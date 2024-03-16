import { Router } from "express";
import { register, login, updateUser } from "./controllers/userControllers.js";
import {
  createAdvertisement,
  getAllAdvertisement,
  getOneAdvertisement,
  removeAdvertisement,
  updateAdvertisement,
  searchAds,
} from "./controllers/advertisementControllers.js";
import {
  createMessage,
  getMessages,
  getMessagesByConversationId,
} from "./controllers/messageControllers.js";
import { checkAuth } from "./utils/checkAuth.js";

const router = new Router();

router.post("/user/register", register);
router.post("/user/login", login);
router.patch("/users/profile/:id", updateUser);

router.post("/ads", checkAuth, createAdvertisement);
router.get("/ads", getAllAdvertisement);
router.get("/ads/:id", getOneAdvertisement);
router.patch("/ads/:id", updateAdvertisement);
router.delete("/ads/:id", removeAdvertisement);
router.get("/ads/search", searchAds);

router.post("/messages", checkAuth, createMessage);
router.get("/messages", checkAuth, getMessages);
router.get("/messages/:conversationId", checkAuth, getMessagesByConversationId);

export default router;
