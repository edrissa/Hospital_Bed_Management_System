const Department = require('../models/department');

//create-one
const createDepartment = async (req, res) => {
    const content = req.body;
   
    console.log(content);
    try {
     const user = await Department.create({ ...content });
   
     return res.status(201).json({ data: user });
    } catch (error) {
     console.log(error);
     return res.status(500).end();
    }
};

 //get-all
 const getAllUsers = async (req, res) => {
    try {
     const users = await User.find({});
   
     return res.status(201).json({ data: users });
    } catch (error) {
     console.log(error);
     return res.status(500).end();
    }
 };

 //get-one
 const getOneUser = async (req, res) => {
    const id = req.params.id
    try {
     const user = await User.findOne({ _id: id });
   
     if (!user) {
      return res.status(400).json({ message: 'user not found' });
    }
     return res.status(201).json({ data: user });
    } catch (error) {
     console.log(error);
     return res.status(500).end();
    }
   };

//update-one
const updateOne = async (req, res) => {
    const id = req.params.id
    const content = req.body
   
    try {
     const user = await User.findOneAndUpdate(
     { _id: id },
      content,
     { new: true }
    );
   
     if (!user) {
      return res.status(400).json({ message: 'user not found' });
    }
     return res.status(201).json({ data: user });
    } catch (error) {
     console.log(error);
     return res.status(500).end();
    }
   };

module.exports = {
    createDepartment,
    getAllUsers,
    getOneUser,
    updateOne
};