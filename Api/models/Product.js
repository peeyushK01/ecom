const mongoose = require("mongoose")
const Productschema = new mongoose.Schema(
    {
        title: {type:String , required:true, unique:true},
        desc: {type:String,require:true},
        img: {type:String , require:true} ,
        categories: {type: Array} ,
        size: {type:String } ,
        color: {type:String } ,
        price: {type:Number , require:true} ,
        InStock: {type:Boolean,default:true},
        
    },
    {timestamps:true}
    );
    module.exports =mongoose.model("Product",Productschema);