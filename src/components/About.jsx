import React from "react"
import me from "../assets/Bild/me.jpg"
import {motion} from "framer-motion"

function About() {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">Über mich</h1>
            <div className="flex flex-warp">
                <motion.div
                    whileInView={{opacity:1, x:0}}
                    initial = {{opacity:0, x:-100}}
                    transition={{duration:0.5}}
                    className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className="rounded-2xl" src={me} alt="" />
                    </div>
                </motion.div>
                <motion.div 
                    whileInView={{opacity:1, x:0}}
                    initial = {{opacity:0, x:100}}
                    transition={{duration:0.5}}
                    className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                            <p className="my-2 max-w-xl py-6 px-4">Ich bin Michel Ange Nji-Le, Student an der RPTU Kaiserslautern-Landau, wo ich seit zwei Semestern Informatik studiere. <br /> <br />
                                Seit nunmehr acht Monaten entwickle ich mit Leidenschaft Web-Anwendungen und habe dabei ein besonderes Interesse an Responsive Design, Web-Performance und skalierbaren Backend-Systemen. <br /> <br />
                                Aktuell bin ich auf der Suche nach neuen Herausforderungen, um meine Fähigkeiten weiter auszubauen. Ich möchte die Möglichkeit bekommen, von erfahrenen Fachleuten zu lernen, an echten Projekten zu arbeiten und mein Wissen in einer professionellen Umgebung zu vertiefen. <br /> <br />
                                Ich beherrsche Technologien wie HTML, CSS, JavaScript und Node.js und freue mich darauf, meine Kenntnisse weiter zu erweitern.
                            </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
};

export default About;