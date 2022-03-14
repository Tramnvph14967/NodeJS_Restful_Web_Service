
import mongoose from "mongoose";
const Product = mongoose.model('Product', {name:String});


// fake data
const products = [{id: 1,name: "Product A",},{id: 2,name: "Product B",},];

export const list = async (req, res) => { // get all
    try {
        const products = await Product.find().exec();
        res.json(products);    
    } catch (error) {
        res.status(400).json({
            message: "List sản phẩm thành công"
        })
    }
  }
export const get = async (req, res) => { // get a product
    try {
        const products = await Product.findOne({_id: req.params.id}).exec();
        res.json(products);    
    } catch (error) {
        res.status(400).json({
            message: "Lấy ra 1 sản phẩm không thành công"
        })
    }
}
export const create = async (req, res) => { // create product
    try {
        const product = await Product(req.body).save();
        res.json(product);    
    } catch (error) {
        res.status(400).json({
            message: "Thêm sản phẩm không thành công"
        })
    }
}
export const remove = async (req, res) => { // delete product
    try {
        const products = await Product.findOneAndDelete({_id: req.params.id}).exec();
        res.json(products);    
    } catch (error) {
        res.status(400).json({
            message: "Xóa sản phẩm thành công"
        })
    }
}
export const update = async (req, res) => { // update product
    const condition = {_id: req.params.id };
    const update = req.body;
    const optional = { new: true}

    try {
        const products = await Product.findOneAndUpdate({condition,update,optional}).exec();
        res.json(products);    
    } catch (error) {
        res.status(400).json({
            message: "Cập nhật sản phẩm thành công"
        })
    }
}