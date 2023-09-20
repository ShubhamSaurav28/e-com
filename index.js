const express = require('express');
const app = express();
const path = require('path');
const Product = require('./models/products');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const PORT = 6705;
mongoose.connect('mongodb:// :27017/GLA-DB')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log(err);
    })

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/',(req,res)=>{
    res.send('please redirect')
})

app.get('/products', async (req, res) => {
    const products = await Product.find({});
    res.render('products/index', { products });
})

app.get('/products/new', async (req, res) => {
    res.render('products/new');
})

app.post('/products', async (req, res) => {
    const { name, image, price, description } = req.body;
    await Product.create({ name, image, price, description });
    res.redirect('/products');
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/product', { product });
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product });
})

app.patch('/products/:id', async (req, res) => {
    const { id } = req.params;
    const { name, image, price, description } = req.body;
    const product = await Product.findById(id);
    product.name = name;
    product.image = image;
    product.price = price;
    product.description = description;

    await product.save();
    res.redirect('/products');
})

app.listen(PORT, () => {
    console.log('server is up at port', PORT);
})