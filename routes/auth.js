const express = require("express");
const router = express.Router();

const ctrl = require("../controllers/auth");
const validateBody = require("../helpers/validateBody");
const {schemas} = require("../models/user");
const authenticate = require("../middlewares/authenticate");

// signup
router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

// signin

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent );

router.post("/logout", authenticate, ctrl.logout)

module.exports = router;