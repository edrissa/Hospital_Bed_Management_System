const express = require('express');
const router = express.Router();
 
const { createUser, getAllUsers, getOneUser, updateOneUser, deleteOneUser} = require('../controllers/user');
const {createDepartment} = require('../controllers/department');
const { createWard, updateOneWard, deleteOneWard, getAllWards, getOneWard } = require('../controllers/ward');
const { createBed, getAllBeds, getOneBed, updateOneBed, deleteOneBed} = require('../controllers/bed')
 
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
router.put('/ward/:id', updateOneWard);
router.delete('/ward/:id', deleteOneWard)

//Bed route
router.post('/bed', createBed);
router.put('/bed/:id', updateOneBed);
router.delete('/bed/:id', deleteOneBed);
router.get('/bed', getAllBeds);
router.get('/bed', getOneBed);

module.exports = router; 