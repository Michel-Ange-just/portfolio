import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";


function Navbar() {
    const handleIconClick = (url) => {
        window.location.href = url; // Redirection vers l'URL spécifiée
    };
    return(
        <>
            <nav className=" mb-20 flex items-center justify-betwenn py-6 flex justify-between">
                <p className="text-2xl">MA</p>
                <ul className="flex justify-around text-2xl">
                    <li className="mr-8"  onClick={() => handleIconClick('https://github.com/Michel-Ange-just')}> <FaGithub></FaGithub> </li>
                    <li className="" onClick={() => handleIconClick('mailto:michelange.njile@gmail.com')}><CiMail/></li>
                </ul>

            </nav>
           
        </>
    );
};

export default Navbar; 