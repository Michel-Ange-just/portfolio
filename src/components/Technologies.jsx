import React from "react"
import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import { SiFsharp } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import {motion} from "framer-motion"; 
import { SiSocketdotio } from "react-icons/si";

const iconVariants = (duration) =>({
    initial: {y:-10},
    animate: {
        y:[10, -10],
        transition : {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse", 

        }

    }
});

function Technologies() {
    return(
        <div className="border-b border-neutral-800 pb-24">
            <h2 className="my-20 text-center text-4xl">Technologien</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                < motion.div
                    variants={iconVariants(2.5)}
                    initial= "initial"
                    animate = "animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                   <FaHtml5 className="text-7xl text-orange-500" />
                </motion.div>
                < motion.div 
                    variants={iconVariants(2.5)}
                    initial= "initial"
                    animate = "animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaCss3 className="text-7xl text-blue-500" />
                </motion.div>
                < motion.div 
                    variants={iconVariants(2.5)}
                    initial= "initial"
                    animate = "animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <IoLogoJavascript className="text-7xl text-yellow-500" />
                </motion.div>
                < motion.div 
                    variants={iconVariants(2.5)}
                    initial= "initial"
                    animate = "animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-500" />
                </motion.div>
                < motion.div 
                    variants={iconVariants(2.5)}
                    initial= "initial"
                    animate = "animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiNodedotjs className="text-7xl text-green-500" />
                </motion.div>
                < motion.div 
                    variants={iconVariants(2.5)}
                    initial= "initial"
                    animate = "animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiFsharp className="text-7xl text-blue-400" />
                </motion.div>
                < motion.div 
                    variants={iconVariants(2.5)}
                    initial= "initial"
                    animate = "animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJava className="text-7xl text-red-500" />
                </motion.div>
                < motion.div 
                    variants={iconVariants(2.5)}
                    initial= "initial"
                    animate = "animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiSocketdotio className="text-7xl text-blue-500" />
                </motion.div>
            </div>
        </div>
    );
};

export default Technologies 