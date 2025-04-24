import React from "react"
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import {motion} from "framer-motion"

function Contact() {
    return (
        <div className="border-b border-neutral-900 pb-20 flex flex-col items-center">
            <h2 className="my-10 text-center text-4xl">Kontakt</h2>
            <div className="tracking-tighter">
                <motion.p className="my-4">Michel Ange Nji-Le</motion.p>
                <motion.p className="my-4 flex "> <span className="text-2xl pr-2 text-blue-500"><CiMail />    </span><a href="mailto: michelange.njile@gmail.com">michelange.njile@gmail.com</a></motion.p>
                <motion.p className="my-4 flex "> <span className="text-2xl pr-2 text-green-500"><BsTelephone/></span><span> +49 176 67701963</span></motion.p>
                <motion.p className="my-4 flex "> <span className="text-2xl pr-2 text-green-500"><FaWhatsapp /></span><span> +49 176 67701963</span></motion.p>
            </div>
        </div>
    );
};

export default Contact;