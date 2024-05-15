import './NavbarList.scss';

import { Link } from "react-router-dom";

function NavbarList() {
    return (
        <>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <details>
                    <summary>Menu</summary>
                    <ul className="p-2">
                        <li><Link>All</Link></li>
                        <li><Link>Salad</Link></li>
                        <li><Link>Pizza</Link></li>
                    </ul>
                </details>
            </li>
            <li>
                <details>
                    <summary>Services</summary>
                    <ul className="p-2">
                        <li className=""><Link className="w-full">Online Order</Link></li>
                        <li className=""><Link className="w-full">Table Booking</Link></li>
                        <li className="w-max"><Link className="w-full">Order Tracking</Link></li>
                    </ul>
                </details>
            </li>
            <li><Link>Offers</Link></li>
        </>
    );
}

export default NavbarList;
