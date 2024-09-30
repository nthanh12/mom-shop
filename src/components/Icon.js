import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import {Link} from 'react-router-dom';


const Icon = () => {
    return (
        <div className="flex">
            <Link className="text-gray-300 text-xl mr-6"><FaFacebook></FaFacebook></Link>
            <Link className="text-gray-300 text-xl mr-6"><FaLinkedin></FaLinkedin></Link>
            <Link className="text-gray-300 text-xl mr-6"><FaYoutube></FaYoutube></Link>
            <Link className="text-gray-300 text-xl mr-6"><FaInstagram></FaInstagram></Link>
        </div>
    )
}
export default Icon;