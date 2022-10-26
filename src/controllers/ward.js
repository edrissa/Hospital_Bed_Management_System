const Ward = require('../models/ward');

//create-one
const createWard = async (req, res) => {
    const content = req.body;
   
    console.log(content);
    try {
     const user = await Ward.create({ ...content });
   
     return res.status(201).json({ data: user });
    } catch (error) {
     console.log(error);
     return res.status(500).end();
    }
};

 //get-all
 const getAllWards = async (req, res) => {
    try {
     const users = await Ward.find({});
   
     return res.status(201).json({ data: users });
    } catch (error) {
     console.log(error);
     return res.status(500).end();
    }
 };

 //get-one
 const getOneWard = async (req, res) => {
    const id = req.params.id
    try {
     const user = await Ward.findOne({ _id: id });
   
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
const updateOneWard = async (req, res) => {
    const id = req.params.id
    const content = req.body
   
    try {
     const user = await Ward.findOneAndUpdate(
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
    createWard,
    getAllWards,
    getOneWard,
    updateOneWard
   }