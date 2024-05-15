import './NavbarList.scss';

import { Link } from "react-router-dom";

function NavbarList() {
    return (
        <>
            <li>
                <Link>Item 1</Link>
            </li>
            <li>
                <details>
                    <summary>Parent</summary>
                    <ul className="p-2">
                        <li><Link>Submenu 1</Link></li>
                        <li><Link>Submenu 2</Link></li>
                    </ul>
                </details>
            </li>
            <li><Link>Item 3</Link></li>
        </>
    );
}

export default NavbarList;
