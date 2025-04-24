import React from "react"
import { FcGraduationCap } from "react-icons/fc";
import { FaRegHandPointRight } from "react-icons/fa"; 
import {motion} from "framer-motion"



function Experience() {
    return (
        <div className="border-b border-neutral-900 pb-4 flex flex-col justify-center items-center">
            <h1 className="my-20 text-center text-4xl">Erfahrung</h1>
            < motion.div 
                whileInView={{opacity:1, x:0}}
                initial = {{opacity:0, x:-100}}
                transition={{duration:0.5}}
                className="  ">
               <div className="flex "><FcGraduationCap /> <p className="pl-4">Informatikstudium (RPTU Kaiserslautern-Landau): 2024 - jetzt</p> </div>
               <p className="pl-12 flex "><FaRegHandPointRight/> <span className="pl-4">Grundlagen in Programmierung</span></p>
               <p className="pl-12 flex "><FaRegHandPointRight/> <span className="pl-4">Praktische Übungen in HTML5, CSS3, JavaScript und F#</span></p>
               <p className="pl-12 flex "><FaRegHandPointRight/> <span className="pl-4">Erste Erfahrung mit F#</span></p>
               <div className="flex"><FcGraduationCap /> <p className="pl-4">Selbstudium &amp; Weiterbildungen</p> </div>
               <p className="pl-12 flex "><FaRegHandPointRight/> <span className="pl-4">Online-Kurse (ohne Zertifikat): 2023 - 2024</span></p>
               <p className="pl-12 flex "><FaRegHandPointRight/> <span className="pl-4">Selbstäntig Technologien wie React, Node.js, F# und Java erlernt: 2023 - jetzt</span></p>
               <p className="pl-12 flex "><FaRegHandPointRight/> <span className="pl-4">Aktive Teilnahme an Coding-Challenges (LeetCode) : 2023 - jetzt</span></p>
               <div className="flex"><FcGraduationCap /> <p className="pl-4">Gruppenprojekte und Zusammenarbeit</p> </div>
               <p className="pl-12 flex "><FaRegHandPointRight/> <span className="pl-4">Tic-Tac-Toe-Spiel: Entwicklung eines klassischen Tic-Tac-Toe-Spiels, <br /> bei dem zwei Spieler in einem 3x3-Raster gegeneinander antreten,<br /> um drei Symbole in einer Reihe zu platzieren.
               </span></p>
               
            </motion.div>
        </div>
    );
};

export default Experience 