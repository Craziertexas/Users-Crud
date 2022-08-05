var express = require('express');
var router = express.Router();
var UsersController = require("../controller/usersController");

router.get('/getusers', UsersController.GetUsers);
router.get('/getusersById/:userId', UsersController.GetUsersById);
router.post('/createUsers', UsersController.CreateUsers);
router.put('/updateUsersById/:userId', UsersController.UpdateUsersById);
router.delete('/deleteUsersById/:userId', UsersController.DeleteUsersById);

module.exports = router;
