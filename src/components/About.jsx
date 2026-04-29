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
                            <p className="my-2 max-w-xl py-6 px-4">Ich bin Michel Ange Nji‑Le, Informatikstudent an der RPTU Kaiserslautern‑Landau, mit einem starken Interesse an Softwareentwicklung, Machine learning und modernen Webtechnologien.
Im Wintersemester 2025 war ich Tutor für die Vorlesung "Konzepte der Programmierung".Seit mehreren Monaten entwickle ich mit Begeisterung Web‑Anwendungen und beschäftige mich intensiv mit Responsive Design, Web‑Performance und skalierbaren Backend‑Systemen. 
                                Dabei lege ich großen Wert auf sauberen Code, effiziente Architektur und eine gute Nutzererfahrung.
Ich arbeite mit Technologien wie HTML, CSS, JavaScript (React), Node.js, Python (Django, Pandas, numpy, matplotlib) und Java (Spring, REST‑APIs, JUnit). Außerdem habe ich Erfahrung mit Versionskontrolle (Git, GitHub, GitLab) und agilen Methoden (Scrum).
Aktuell suche ich nach neuen Herausforderungen, um meine Fähigkeiten weiter auszubauen und praktische Erfahrung in professionellen Projekten zu sammeln. Besonders reizt mich die Möglichkeit, mit erfahrenen Entwicklerinnen und Entwicklern zusammenzuarbeiten und mein Wissen in einem Team einzubringen.
Neben der Webentwicklung interessiere ich mich für Software‑Architektur, Datenanalyse und funktionale Programmierung (F#). Ich bin überzeugt, dass kontinuierliches Lernen und Neugier die Grundlage für gute Software sind
                            </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
};

export default About;
