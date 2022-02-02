import express from 'express';
import data from '../data.js';
import User from '../models/userModel.js';
import Product from '../models/productModel.js';

import bcrypt from 'bcrypt';
import { generateToken } from '../utils.js';


const userRouter = express.Router()

userRouter.get('/seed', async(req, res) => {
    await User.deleteMany({});
    const existingUsers = await User.insertMany(data.users);
    res.send({existingUsers})
})



userRouter.post('/login', async(req, res) => {
    const user = await User.findOne({email: req.body.email})
    if(user){
        if(bcrypt.compareSync(req.body.password, user.password)){
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user),
                favorites: user.favorites
            })
            return
        }
    }
    res.status(401).send({message: 'usuario o contraseña invalido'})
})

userRouter.post('/signup', async(req, res) => {
    const user = await User.findOne({email: req.body.email})
    if (user) {
        return res.status(400).send('That user already exists!');
    } else {
        //save new user
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
            favorites: []
            
        });
        await user.save();
        res.send(user);
    }
})

userRouter.put('/favorites', async(req, res) => {

    const user = await User.findOne(req.body._id);
    const product = await Product.findOne(req.body._id)
    const update = { favorites: product};
    await user.updateOne(update);
    res.send({favorites: user.favorites})
})

userRouter.get('/favorites', async(req, res) => {
    const user = await User.findOne(req.body._id)
    if(user){
        res.send({favorites: user.favorites})
    } else {
        return res.status(400).send('User not found!');
    }
   
    //const favorites = await User.find({favorites: req.body.email});
    
})


export default userRouter;