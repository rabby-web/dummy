import { useLoaderData } from "react-router-dom";
import ProductCart from "../ProductCart/ProductCart";


const Product = () => {
    const products = useLoaderData()
    // console.log(products.products)
    return (
        <div className="container mx-auto text-white">
            <h2 className="text-center font-semibold text-2xl py-2">Products </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    products.products.map(product => <ProductCart key={product.id} product={product}></ProductCart>)
                }
            </div>
        </div>
    );
};

export default Product;