const Product = require('../models/productModel');
const ErrorHandler = require('../utils/errorhandler');
const catchAsynError = require('../middleware/catchAsynError');
const req = require('express/lib/request');
const ApiFeatures = require('../utils/apifeatures')
// create product (admin route).........
// exports.createProduct = async (req, res, next) => {
//     const product = await Product.create(req.body);

//     res.status(201).json({ success: true, product })
// }

// create product (admin route).........
exports.createProduct = catchAsynError(async(req, res, next) => {
    const product = await Product.create(req.body);

    res.status(201).json({ success: true, product })
});





// get all products........
exports.getAllProducts = catchAsynError(async (req, res) => {

    const resultPerPage = 5;
    const productCount = await Product.countDocuments();
    const apiFeatures = new ApiFeatures(Product.find(),req.query).search().filter().pagination(resultPerPage);
    const products = await apiFeatures.query;
    res.status(200).json({ success: true, products });
});


// update product.............
exports.updateProduct = catchAsynError( async (req, res, next) => {
    let product = Product.findById(req.params.id);

    if (!product) {
        return res.status(500).json({ success: false, message: "Product not found" });
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true, useFindAndModify: false });

    res.status(200).json({ success: true, product })
});


// delete product........
exports.deleteProduct = catchAsynError(async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(500).json({ success: false, message: "Product not found." });
    }

    await product.remove();
    res.status(200).json({ success: true, message: "Product deleted successfully." })
});


// Get product details
// exports.getProductDetails = async(req,res,next)=>{

//     const product = await Product.findById(req.params.id);

//     if (!product) {
//         return res.status(500).json({ success: false, message: "Product not found." });
//     }
//     res.status(200).json({ success: true, product});
// }


exports.getProductDetails =catchAsynError( async(req,res,next)=>{

    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("Product not found.",404));
    }
    res.status(200).json({ success: true, product,productCount});
});