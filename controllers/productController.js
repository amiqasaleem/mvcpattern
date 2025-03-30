import ProductModel from "../models/productModel.js";

//business logic

//For getting / fetching products

const getProducts = async(req, res) => {
    try {
        const allProducts = await ProductModel.find();

        if (!allProducts || allProducts.length === 0) {
            return res.json({
                success: false,
                message: "There are no products"
            });
        }

        // Send the response when products are found
        res.status(200).json({
            success: true,
            products: allProducts
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

//Create Product

const createProduct = async(req,res)=>{
    try{
        const {name, price, description, category, color } = req.body;
        const newProduct = new ProductModel({name, price, description, category, color});
        await newProduct.save();
        res.status(200).json({
            success:true,
            message:"Product is created",
            product: newProduct
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

//Update products

const updateProduct = async(req,res)=>{
    try{
        const {name, price, description, category, color } = req.body;
        const {id} = req.params;

        const updatedProduct = await ProductModel.findByIdAndUpdate(id,{name, price, description, category, color}, {new:true});
        
        res.status(200).json({
            success:true,
            message:"Product updated succesfully",
            product: updatedProduct
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

//delete product

const deleteProduct = async(req,res)=>{
    try{
        // const {name, price, description, category, color } = req.body;
        const {id} = req.params;
        const deletedProduct = await ProductModel.findByIdAndDelete(id);
        res.status(200).json({
            success:true,
            message:"Product deleted succesfully",
            product: deletedProduct
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}
export {getProducts,createProduct,updateProduct, deleteProduct}

