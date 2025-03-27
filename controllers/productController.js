import ProductModel from "../models/productModel";

//business logic

const getProducts = async(req,res)=>{
    try{
        const allProducts = ProductModel.find();

        if(!allProducts){
            res.json({
                succes:false,
                message:"There is no products"
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