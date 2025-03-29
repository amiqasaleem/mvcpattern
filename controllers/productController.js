import ProductModel from "../models/productModel.js";

//business logic

//For getting / fetching products

const getProducts = async(req,res)=>{
    try{
        const allProducts = await ProductModel.find();

        if(!allProducts){
            res.json({
                succes:false,
                message:"There are no products"
            })
            //if we have products
            res.status(200).json({
                success:true,
                products: allProducts
            })
        }
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}


export {getProducts}
