const User = require("../models/user");


async function handleGetAllUsers(req,res){
    const alldbUsers = await User.find({});
     return res.json(alldbUsers);
 }

 async function handleGetUserById(req,res){
    //  const id = Number(req.params.id);
    //  const user = users.find((user) => user.id == id);
 
    const user = await User.findById(req.params.id);
     return res.json(user);
 }

 async function handleUpdateUserById(req,res){
    await User.findByIdAndUpdate(req.params.id, { last_name: " changed"});
     //edit user with id
     return res.json({status : "succesfully changed!"});
 }

 async function handleDeleteUserById(req,res){
    await User.findByIdAndDelete(req,params,id);
    return res.json({ status: " Succesfully Deleted!"})
 }

 async function handleCreateNewUser(req,res){
    const body = req.body;
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
      return res.status(400).json({msg : "All fields are req..."});
   
    }
    const result = await User.create({
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      gender: body.gender,
      job_title: body.job_title,

    });
   //  console.log("result", result);

    return res.status(201).json({ msg: "Success",id: result._id});

 }

 module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser,
 }