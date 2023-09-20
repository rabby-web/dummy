import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Product from "../Pages/Product/Product";
import Cart from "../Pages/Cart/Cart";
import ProductLayout from "../layout/ProductLayout";
import DummyProduct from "../Pages/DummyProduct/DummyProduct";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";

const myCreateRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/product',
                element: <Product></Product>,
                loader: () => fetch('https://dummyjson.com/products')
            },
            {
                path: '/product/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({params}) => fetch(`https://dummyjson.com/products/${params.id}`)
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '/dashboard',
                element: <ProductLayout></ProductLayout>,
                children: [
                    {
                        path: '/dashboard',
                        element: <DummyProduct></DummyProduct>
                    }
                ]
            }
        ]
    }
])
export default myCreateRoute;