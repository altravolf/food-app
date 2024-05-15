import NavbarList from "../NavbarList/NavbarList";
import './Navbar.scss';
import logo from "/logo.png";
import { Link } from "react-router-dom";
import { PiPhoneCall } from "react-icons/pi";
import CartIcon from "../CartIcon/CartIcon";
import SearchIcon from "../SearchIcon/SearchIcon";


function Navbar() {
    return (
        <header className="Navbar max-w-screen-2xl container max-auto">
            <div className="navbar xl:px-24">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavbarList />
                        </ul>
                    </div>
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavbarList />
                    </ul>
                </div>
                <div className="navbar-end">

                    <span className="hidden sm:flex">
                        {/* Search Icon */}
                        <SearchIcon />
                        {/* Cart Icon */}
                        <CartIcon />
                    </span>

                    {/* Contact btn */}
                    <a className="btn bg-light-green rounded-full px-6 text-center hover:shadow-lg hover:bg-light-green  hover:text-white ms-3">
                        <PiPhoneCall className="inline h-5 w-5" /> Contact
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
