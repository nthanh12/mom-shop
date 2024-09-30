import React from "react";
import {Link} from 'react-router-dom';
import Icon from "../components/Icon";
import {navbar} from "../data/Data";

const MidHeader = () => {
    return (
        <div>
            <div>
            <div className="p-4">
            <div className="w-10/12 m-auto">
                <ul className="flex place-content-between">
                    <li className="flex items-center">
                        <Link className="logo">
                            <img src="./images/obsessions_ecom/obsession_logo.png" alt="logo_img"></img>
                        </Link>
                        <div>
                            {
                                navbar.slice(1, 4).map((link, key) => (
                                    <Link to={link.path}>{link.nav}</Link>
                                ))
                            }
                        </div>
                    </li>
                    <li>
                        <Link className="mr-5 text-sm capitalize border-r-2 pr-4 pl-4">Our Stores</Link>
                        <Link className="mr-2 text-sm capitalize border-r-2 pr-4">Privacy Policy</Link>
                        <Link className="mr-2 text-sm capitalize border-r-2 pr-4 pl-4">FAQs</Link>
                    </li>
                </ul>
            </div>
        </div>
            </div>
        </div>
    )
}
export default MidHeader;