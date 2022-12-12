const Bed = require('../models/bed');
const Ward = require('../models/ward');

//create-one
// const createBed = async (req, res) => {
//     const content = req.body;
   
//     console.log(content);
//     try {
//      const user = await Bed.create({ ...content });
   
//      return res.status(201).json({ data: user });
//     } catch (error) {
//      console.log(error);
//      return res.status(500).end();
//     }
// };

//create-one
const createBed = async (req, res) => {
   const content = req.body;
   const ward = await Ward.findById(content.wardId);

   try {
      const bed = await Bed.create({ward: content.wardId, ...content})

      ward.beds = ward.beds.concat(bed._id)
      await ward.save();

      return res.status(201).json({ data: bed });
   }  catch(error) {
      console.log(error);
      return res.status(500).end();
   }  
};

 //get-all
 const getAllBeds = async (req, res) => {
   const wardId = req.body.wardId;

    try {
     const beds = await Bed.find({ ward: wardId });
   
     return res.status(201).json({ data: beds });
    } catch (error) {
     console.log(error);
     return res.status(500).end();
    }
 };

 //get-one
 const getOneBed = async (req, res) => {
    const id = req.params.id
    const wardId = req.body.wardId;

    try {
     const bed = await Ward.findOne({ _id: id, ward: wardId });
   
     if (!bed) {
      return res.status(400).json({ message: 'bed not found' });
    }
     return res.status(201).json({ data: ward });
    } catch (error) {
     console.log(error);
     return res.status(500).end();
    }
   };

//update-one
const updateOneBed = async (req, res) => {
    const id = req.params.id
    const content = req.body
   
    try {
     const user = await Bed.findOneAndUpdate(
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

   //Delete one
   const deleteOneBed = async (req, res) => {
      const id = req.params.id
     
      try {
       const user = await Bed.findOneAndRemove({ _id: id });
     
       if (!user) {
        return res.status(400).json({ message: 'user not found' });
      }
       return res.status(201).json({ message: 'deleted successfully', data: user });
      } catch (error) {
       console.log(error);
       return res.status(500).end();
      }
     };

   module.exports = {
    createBed,
    getAllBeds,
    getOneBed,
    updateOneBed,
    deleteOneBed
   }