import React from "react"
import titac from "../assets/Bild/tictac.jpg"
import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import { SiFsharp } from "react-icons/si";
import {motion} from "framer-motion"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

function Projects() {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl ">Meine Projekte</h2>
            <div className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div
                    className="w-full lg:w-1/4">
                    <img src={titac} width={150} height={150} alt="Bild-Tic-Tac-Toe" className="mb-6 rounded"/>
                </motion.div>
                <motion.div 
                    className="w-full max-w-xl lg: w-3/4">
                    <h6 className="mb-2 text-2xl">Tic-Tac-Toe-Spiel</h6>
                    <p className="mb-4">Dies ist ein interaktives Tic-Tac-Toe-Spiel, das es zwei Spielern ermöglicht,
                         abwechselnd Züge zu machen und das Spiel zu gewinnen oder mit einem Unentschieden zu enden. 
                        Das Spiel ist vollständig mit JavaScript, HTML und CSS entwickelt und zeigt meine Fähigkeiten
                         in der Programmierung und Problemlösung. 
                         <br />Eine Runde ? Klicken Sie bitte  <a href=" https://michel-ange-just.github.io/tictactoe/"><u>hier</u></a> </p>
                    <div className="flex flex-wrap justify-around">
                        <FaHtml5 className="text-2xl text-orange-500 " />
                        <FaCss3 className="text-2xl text-blue-500" />
                        <IoLogoJavascript className="text-2xl text-yellow-500" />
                    </div>
                </motion.div>
            </div>
            <div className="mb-8 flex flex-war lg:justify-center">

            </div>
            <div className="mb-8 flex flex-war lg:justify-center">

            </div>
        </div>
    );
};

export default Projects 