'use strict';
const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const Post = require("./model/Post")
const cors = require("cors")

const mongo_address = "mongodb://127.0.0.1:27017/WEBpDB"
mongoose.connect(mongo_address)

var app = express()
var staticPath = path.join(__dirname, '/')
app.use(express.static(staticPath))
app.use(express.json())
app.use(cors({
    origin: '*'
}));

app.get("/posts",async (req,res)=>{
    try{
        let allPosts = await Post.find({})
        res
            .status(200)
            .json(allPosts)
        console.log(`GET /posts 200 OK`)
    }catch(error){
        console.log(`GET /posts ERROR:${error.message}`)
        res.status(500)
    }
})
app.get("/posts/:id",async (req,res)=>{
    const {id} = req.params
    try{
        let post = await Post.findById(id)
        if(post != null){
            res
                .status(200)
                .json(post)
            console.log(`GET /posts/${id} 200 OK`)
        }else{
            res
                .status(404)
                .send()
            console.log(`GET /posts/${id} 404 NotFound`)
        }
    }catch(error){
        if(error.name == 'CastError' && error.kind == 'ObjectId'){
            res
                .status(404)
                .send()
            console.log(`GET /posts/${id} 404 NotFound`)
        }
        else{
            if (id == undefined) id = '???'
            console.log(`GET /posts/${id} ERROR:${error.message}`)
            res
                .status(500)
                .send()
        }
    }
})
app.delete("/posts/:id", async (req,res)=>{
    const {id} = req.params
    try{
        await Post.findByIdAndDelete(id)

        res
            .status(200)
        console.log(`DELETE /posts/${id} 200 OK`)
    }catch(error){
        console.log(`DELETE /posts/${id} ERROR:${error.message}`)
        res.status(500)
    }
})
app.patch("/posts/:id", async (req,res)=>{
    const {id} = req.params
    try{
        const newEntry = req.body

        await Post.findByIdAndUpdate(id,newEntry)
        let post = await Post.findById(id)

        res
            .status(200)
            .json(post)
        console.log(`PATCH /posts/${id} 200 OK`)
    }catch(error){
        console.log(`PATCH /posts/${id} ERROR:${error.message}`)
        res.status(500)
    }
})
app.post("/posts/create",async (req,res)=>{
    try{
        const newEntry = req.body

        delete newEntry._id
        delete newEntry.__v
        let post = await Post.create(newEntry)

        res
            .status(200)
            .json(post)
        console.log(`POST /posts/create 200 OK`)
    }catch(error){
        console.log(`POST /posts/create ERROR:${error.message}`)
        res.status(500)
    }
})

// Allows you to set port in the project properties.
const PORT = 1001
app.set('port', PORT || 3000)

var server = app.listen(app.get('port'), function () {
    console.log(`listening on ${PORT}`)
})