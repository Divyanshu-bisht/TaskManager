const express = require("express");
const {
  registerUser,
  loginUser,
} = require("../controllers/authController");

const router = express.Router();
/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     responses:
 *       201:
 *         description: User registered successfully
 */

router.post("/register", registerUser);
/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Login successful
 */

router.post("/login", loginUser);

module.exports = router;