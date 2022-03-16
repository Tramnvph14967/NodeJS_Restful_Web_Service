import Category from '../models/category'
import slugify from 'slugify';
import Product from '../models/product'


export const create = async (req, res) => { // create category
    req.body.slug = slugify(req.body.name);
    try {
        const category = await new Category(req.body).save()
        res.json(category);    
    } catch (error) {
        res.status(400).json({
            message: "Không thành công"
        })
    }
}


export const list = async (req, res) => { // get all
    try {
        const categorys = await Category.find().exec();
        res.json(categorys);    
    } catch (error) {
        res.status(400).json({
            message: "Không thành công"
        })
    }
  }

  
export const get = async (req, res) => { // get a Category
    try {
        const categorys = await Category.findOne({_id: req.params.id }).exec();
        res.json(categorys);    
    } catch (error) {
        res.status(400).json({
            message: "Không thành công"
        })
    }
}



export const remove = async (req, res) => { // delete Category
    try {
        const categorys = await Category.findOneAndDelete({_id: req.params.id }).exec();
        res.json(categorys);    
    } catch (error) {
        res.status(400).json({
            message: "Không thành công"
        })
    }
}



export const update = async (req, res) => { // update Category
    const condition = {_id: req.params.id };
    const update = req.body;
    const optional = { new : true}
    try {
        const categorys = await Category.findOneAndUpdate(condition,update,optional).exec();
        res.json(categorys);    
    } catch (error) {
        res.status(400).json({
            message: "Không thành công"
        })
    }
}
export const read = async (req, res) => {
    //get all
    try {
        const category = await Category.findOne({slug:  req.params.slug}).exec();
        const product = await Product.find({category: category}).populate('category').select('-category').exec();
        console.log('products', products);
        res.json({
            category, products
        });
    } catch (error) {
        res.status(400).json({
            message: "Lỗi"
        })
    }
}