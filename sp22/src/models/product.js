import mongoose, {ObjectId} from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 5
    },
    slug: {
        type: String,
        minLength: 5,
        lowercase: true,
        unique:  true,
        index: true
    },
    description : {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: ObjectId,
        ref: "Category"
    },
    shipping: {
        type: String,
        required: true
    }
}, { timestamps: true} )

export default mongoose.model('Product', productSchema);