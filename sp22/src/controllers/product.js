
import mongoose from "mongoose";
const Product = mongoose.model('Product', {name:String});


// fake data
const products = [{id: 1,name: "Product A",},{id: 2,name: "Product B",},];

export const list = (req, res) => { // get all
    res.json(products);
  }
export const get = (req, res) => { // get a product
    const result = products.find(item => item.id === +req.params.id);
    res.json(result);
}
export const create = async (req, res) => { // create product
    try {
        const product = await new Product(req.body).save();
        res.json(product);    
    } catch (error) {
        res.status(400).json({
            message: "Thêm sản phẩm không thành công"
        })
    }
}
export const remove = (req, res) => { // delete product
    const newProducts = products.filter(item => item.id !== +req.params.id);
    res.json(newProducts);
}
export const update = (req, res) => { // update product
    const newProducts = products.map(item => item.id === +req.params.id ? req.body : item)
    res.json(newProducts);
}