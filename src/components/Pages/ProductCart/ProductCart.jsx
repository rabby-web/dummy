import { Link } from "react-router-dom";

const ProductCart = ({product}) => {
    const {price,title,description,images,id} = product;
    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
              <figure><img className="h-72 w-full" src={images[0]} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-between items-center">
                    <p className="text-2xl font-bold">Price: {price}</p>
                  <Link to={`/product/${id}`}><button  className="btn btn-primary">Details</button></Link>
                </div>
              </div>
            </div>
        </div>
    );
};

export default ProductCart;