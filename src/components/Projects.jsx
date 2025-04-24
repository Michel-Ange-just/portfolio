import React from "react"
import titac from "../assets/Bild/tictac.jpg"
import contact from "../assets/Bild/contact.png"
import pexels from "../assets/Bild/pexels.jpg"
import pixabay from "../assets/Bild/pixabay.jpg"
import tafel from "../assets/Bild/tafel.jpg"
import music from "../assets/Bild/music.png"
import rick from "../assets/Bild/rick.jpg"
import web from "../assets/Bild/web.jpg"
import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import { SiFsharp } from "react-icons/si";
import {motion} from "framer-motion"
import { SiSocketdotio } from "react-icons/si";


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
            <div className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div
                    className="w-full lg:w-1/4">
                    <img src={tafel} width={150} height={150} alt="Bild-Tic-Tac-Toe" className="mb-6 rounded"/>
                </motion.div>
                <motion.div 
                    className="w-full max-w-xl lg: w-3/4">
                    <h6 className="mb-2 text-2xl">Waveboard</h6>
                    <p className="mb-4"> Waveboard ist eine innovative Web-App, die eine intuitive und dynamische Benutzererfahrung bietet. Entwickelt für Kreative, Entwickler und Technikbegeisterte, ermöglicht Waveboard eine nahtlose Verbindung zwischen Design, Funktionalität und Benutzerfreundlichkeit.
                         <br /><a href="https://github.com/Michel-Ange-just/WAVEBOARD.git"><u>Zu Github</u></a> </p>
                    <div className="flex flex-wrap justify-around">
                        <FaHtml5 className="text-2xl text-orange-500 " />
                        <FaCss3 className="text-2xl text-blue-500" />
                        <IoLogoJavascript className="text-2xl text-yellow-500" />
                        <SiSocketdotio className="text-2xl text-blue-500" />
                    </div>
                </motion.div>
            </div>
            <div className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div
                    className="w-full lg:w-1/4">
                    <img src={pixabay} width={150} height={150} alt="Bild-Tic-Tac-Toe" className="mb-6 rounded"/>
                </motion.div>
                <motion.div 
                    className="w-full max-w-xl lg: w-3/4">
                    <h6 className="mb-2 text-2xl">Keyboard-Sound</h6>
                    <p className="mb-4"> 
                         <br />Keyboard-Sound ist eine interaktive, reaktive Website, die eine akustische und 
                        visuelle Erfahrung bietet. Das Besondere dabei: Jedes Mal, wenn eine Taste auf der Tastatur
                        gedrückt wird, wird ein Sound abgespielt und die Hintergrundfarbe verändert.. Lust darauf?
                        <a href="https://michel-ange-just.github.io/KEYBOARD_SOUND/"><u>Zu der Webseite</u></a> </p>
                    <div className="flex flex-wrap justify-around">
                        <FaHtml5 className="text-2xl text-orange-500 " />
                        <FaCss3 className="text-2xl text-blue-500" />
                        <IoLogoJavascript className="text-2xl text-yellow-500" />
                    </div>
                </motion.div>
            </div>
            <div className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div
                    className="w-full lg:w-1/4">
                    <img src={rick} width={150} height={150} alt="Bild-Tic-Tac-Toe" className="mb-6 rounded"/>
                </motion.div>
                <motion.div 
                    className="w-full max-w-xl lg: w-3/4">
                    <h6 className="mb-2 text-2xl">Rick-Game</h6>
                    <p className="mb-4">
                         <br />Rick-Spiel ist ein Reaktions- und Geschicklichkeitsspiel, bei dem der Spieler schnell auf 
                         auftauchende Morty-Köpfe klicken muss. Das Ziel ist es, möglichst viele Punkte zu sammeln, bevor 
                         das Spiel vorbei ist. Eine Runde ? Klicken Sie bitte  <a href="https://michel-ange-just.github.io/RICK-GAME/"><u>hier</u></a> </p>
                    <div className="flex flex-wrap justify-around">
                        <FaHtml5 className="text-2xl text-orange-500 " />
                        <FaCss3 className="text-2xl text-blue-500" />
                        <IoLogoJavascript className="text-2xl text-yellow-500" />
                    </div>
                </motion.div>
            </div>
            
            <div className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div
                    className="w-full lg:w-1/4">
                    <img src={web} width={150} height={150} alt="Bild-Tic-Tac-Toe" className="mb-6 rounded"/>
                </motion.div>
                <motion.div 
                    className="w-full max-w-xl lg: w-3/4">
                    <h6 className="mb-2 text-2xl">FlippingCard</h6>
                    <p className="mb-4">
                        FlippingCard ist eine vollständig responsive Website, die sich automatisch an verschiedene 
                        Bildschirmgrößen anpasst – egal ob auf Desktop, Tablet oder Smartphone. Sie folgt den Best 
                        Practices moderner Webentwicklung und bietet eine intuitive Benutzererfahrung..<a href="https://michel-ange-just.github.io/filppingCard/"><u> Zu der Webseite </u></a> </p>  
                    <div className="flex flex-wrap justify-around">
                        <FaHtml5 className="text-2xl text-orange-500 " />
                        <FaCss3 className="text-2xl text-blue-500" />
                        <IoLogoJavascript className="text-2xl text-yellow-500" />
                    </div>
                </motion.div>
            </div>
            <div className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div
                    className="w-full lg:w-1/4">
                    <img src={contact} width={150} height={150} alt="Bild-Tic-Tac-Toe" className="mb-6 rounded"/>
                </motion.div>
                <motion.div 
                    className="w-full max-w-xl lg: w-3/4">
                    <h6 className="mb-2 text-2xl">Card</h6>
                    <p className="mb-4">Das ist eine Login-Seite ist ein minimalistisches und professionelles Anmeldeformular. 
                        Sie kann einen klaren und benutzerfreundlichen Zugang zu geschützten Bereichen bieten.  <a href="https://michel-ange-just.github.io/responsiveCard/"><u>Schnell Übersicht</u></a> </p>
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