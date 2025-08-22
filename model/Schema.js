const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        requied:true
    },
    author:{
        type:String,
        required:true
    },
    isbn:{
        type:String,
        required:true,
        unique:true
    },
    category:{
        type:String,
        required:true,
        enum:['fiction', 'non-fiction', 'comics', 'biography']
    },
    copies:{
        type:Number,
        required:true
    },
    available:{
        type:Number,
        default:"copies",
    }
});

const memberSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    joinDate:{
        type:Date,
        default:Date.now
    },
    booksIssued:[{
        type:mongoose.Schema.Types.ObjectID,
        ref:"Book"
        }]
});

const book = mongoose.model('book',bookSchema);
const member = mongoose.model('member',memberSchema);

module.exports = {book,member};