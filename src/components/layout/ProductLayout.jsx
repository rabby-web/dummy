import { Link, Outlet } from "react-router-dom";


const ProductLayout = () => {
    return (
        <div className="flex gap-5 container my-2 mx-auto w-full">
            <div className="w-[20%]">
                <div className="">
                    <Link className="py-3 bg-slate-900" to="/dummy"><button className="w-full py-3">Dummy</button></Link>
                </div>
                <div className="">
                    <Link className="py-3 bg-slate-900" to="/dummy"><button className="w-full py-3">Dummy</button></Link>
                </div>
            </div>
            <div className="w-[80%]">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default ProductLayout;