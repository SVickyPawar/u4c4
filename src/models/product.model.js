const mongoose=require("mongoose");
const { type } = require("os");

const userSchema=new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:false},
    email:{type:String,required:true},
    password:{type:String,required:true}

},{
    versionKey:false,
    timestamps:true,
})

const User=mongoose.model("user",userSchema);

const toDoSchema=new mongoose.Schema({
    title:{type:String,required:true}
},{
    versionKey:false,
    timestamps:true,
})

const ToDo=mongoose.model("toDo",toDoSchema);