const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");

router.get('/', userController.getAllUsers);
// Get a single User with the given id
router.get("/:id", userController.getUserById); 
// Create a new User
router.post("/", userController.createUser);
// Update a User with the given id
router.put("/:id", userController.updateUser);
// Delete a User with the given id
router.delete("/:id", userController.deleteUser);

module.exports = router;
