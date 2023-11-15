
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext)
    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }
    const navLinks = (
      <>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
       

        <li>
          <NavLink to="/add">Add Product</NavLink>
        </li>
        <li>
          <NavLink to="/my">My card</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </>
    );
    return (
        <div>
            <div className="navbar rounded-lg mt-5 bg-slate-300 border">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div>
                        <img className="h-16 rounded-full w-44" src="https://i.ibb.co/fCLMdYj/automative-removebg-preview.png" alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-8">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <button onClick={handleSignOut} className="btn btn-secondary font-bold text-white ">Sign Out</button>
                            :
                            <Link to="/login">
                                <button className="btn btn-secondary font-bold text-white">SignIn</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};
export default Navbar;