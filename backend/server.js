import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js';
import dotenv from 'dotenv'
// import path from 'path';
// import {fileURLToPath} from 'url';

// const path = require('path');

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
app.use(express.json());
//mongoose.connect('mongodb://localhost/mercadito');
mongoose.connect('mongodb+srv://adminuser:VvkSN5Mw7jM3YqiZ@cluster0.kod3y.mongodb.net/mercadito?retryWrites=true&w=majority');

// app.get('/api/products/:id', (req, res) => {
//   const product = data.products.find((x) => x._id === req.params.id);
//   if(product){
//     res.send(product)
//   } else {
//     res.status(404).send({message: "Product not found"})
//   }
// })


// app.get('/api/products', (req, res) => {
//   res.send(data.products);
// });

app.get('/', (req, res) => {
  res.send('Server is ready');
});



app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

// __dirname = path.resolve()
// if(process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '/frontend/build')))
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
//   })
// }else {
//   app.get('/', (req, res) => {
//     res.send('Server is ready');
//   });
// }


//error catcher
app.use((err, req, res, next) => {
    res.status(500).send({message: err.message})
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});