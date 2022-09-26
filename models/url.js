const mongoose = require('express')
const Schema = mongoose.Schema
const urlSchema = new Schema({
  shortUrl:{
    type: String,
    required : true
  },
  originUrl:{
    type: String,
    required :true
  }
})

module.exports = mongoose.model('ShortUrl' , urlSchema)