import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <div className="flex items-center justify-between px-10 py-4 shadow-xl text-white">
            <div>
                <h1 className="text-3xl font-bold">LOGO</h1>
            </div>
            <div className="text-xl font-semibold flex gap-5">
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/dashboard">Dashboard</Link>
            </div>
        </div>
    );
};

export default Nav;