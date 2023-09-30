const express = require("express");

const router = express.Router();

const {
  validateBody,
  isValidId,
  authenticate,
  upload
} = require("../../middlewares");

const ctrl = require("../../controllers/auth");

const { schemasUser } = require("../../models");

const { ctrlWrapper } = require("../../helpers");

router.post(
  "/register",
  validateBody(schemasUser.registerSchema),
  ctrlWrapper(ctrl.register)
);
router.post(
  "/login",
  validateBody(schemasUser.loginSchema),
  ctrlWrapper(ctrl.login)
);
router.get(
  "/current",
  authenticate,

  ctrlWrapper(ctrl.getCurrent)
);

router.post(
  "/logout",
  authenticate,
  validateBody(schemasUser.loginSchema),
  ctrlWrapper(ctrl.logout)
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);
module.exports = router;
