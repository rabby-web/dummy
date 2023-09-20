import { useLoaderData, useNavigate } from "react-router-dom";


const ProductDetails = () => {
    const product = useLoaderData();
    const {price,title,description,images,rating,stock} = product;
    console.log(product)
    const navigate = useNavigate()
    const handleNavigate = ()=>{
        navigate(-1)
    }
    return (
        <div>
           <div className="card card-compact w-96 mx-auto text-white bg-base-100 shadow-xl">
              <figure><img className="h-80 w-full" src={images[0]} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-between items-center">
                    <p className="text-2xl font-bold">Price: {price}</p>
                  {/* <Link to={`/product/${id}`}><button  className="btn btn-primary">Details</button></Link> */}
                </div>
                <div className="flex justify-between">
                <button className="btn btn-sm">Rating: {rating}</button>
                <button className="btn btn-sm">Stock: {stock}</button>
                </div>
                <button onClick={handleNavigate} className="text-xl rounded-md w-full bg-slate-600">Go Back</button>
              </div>
            </div>
        </div>
    );
};

export default ProductDetails;