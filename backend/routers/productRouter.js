import express from 'express';
import data from '../data.js';
import Product from '../models/productModel.js';

const productRouter = express.Router()

productRouter.get('/', async(req, res) => {
    const products = await Product.find({});
    res.send(products)
})

productRouter.get('/seed', async(req, res) => {
    await Product.deleteMany({});
    const existingProducts = await Product.insertMany(data.products);
    res.send({existingProducts})
})

productRouter.get('/:id', async(req, res) => {
    const product = await Product.findById(req.params.id)
    if(product){
        res.send(product)
    } else {
        res.status(404).send({messsage: 'No encontrado'})
    }
})

export default productRouter;