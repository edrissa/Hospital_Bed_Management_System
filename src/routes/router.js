const express = require('express');
const router = express.Router();
 
const { createUser, getAllUsers, getOneUser, updateOneUser, deleteOneUser} = require('../controllers/user');
const {createDepartment} = require('../controllers/department');
const { createWard, updateOneWard } = require('../controllers/ward');
 
 // User route
 router.post('/user', createUser);
 router.get('/user', getAllUsers);
 router.get('/user/:id', getOneUser);
 router.put('/user/:id', updateOneUser);
 router.delete('/user/:id', deleteOneUser)

 
 
//Dept route
router.post('/department', createDepartment);


//Ward route
router.post('/ward', createWard);
router.put('/ward/:id', updateOneWard)

module.exports = router; 