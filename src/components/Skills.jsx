import React, { useEffect, useState } from "react";
import {
    Angular,
    Docker,
    Express,
    Firebase,
    Flutter,
    Javascript,
    Linux,
    Mongo,
    MySQL,
    NestJS,
    NextJS,
    Node,
    PostgreSQL,
    React as ReactIcon,
    Tailwind,
    Typescript
} from "../assets";

const techs = [
    { src: Typescript, title: "TypeScript", style: "shadow-[#017acb]" },
    { src: Mongo, title: "Mongo DB", style: "shadow-[#4e9445]" },
    { src: Express, title: "Express JS", style: "shadow-gray-300" },
    { src: ReactIcon, title: "React JS", style: "shadow-[#00d6fd]" },
    { src: Node, title: "Node JS", style: "shadow-[#8bc74a]" },
    { src: Firebase, title: "Firebase", style: "shadow-[#f4810b]" },
    { src: Flutter, title: "Flutter", style: "shadow-[#01579b]" },
    { src: NextJS, title: "Next JS", style: "shadow-gray-500" },
    { src: Tailwind, title: "Tailwind CSS", style: "shadow-[#44a8b3]" },
    { src: PostgreSQL, title: "PostgreSQL", style: "shadow-[#336791]" },
    { src: Docker, title: "Docker", style: "shadow-[#1d63ed]" },
    { src: NestJS, title: "NestJS", style: "shadow-[#e0234e]" },
    { src: Angular, title: "Angular", style: "shadow-[#b52e31]" },
    { src: Linux, title: "Linux", style: "shadow-[#ffc000]" },
    { src: MySQL, title: "MySQL", style: "shadow-[#00758f]" },
];

const Skills = () => {
    const [randomizedTechs, setRandomizedTechs] = useState([]);

    useEffect(() => {
        const randomizeTechs = () => {
            const techsCopy = [...techs];
            const randomized = [];
            while (techsCopy.length > 0) {
                const randomIndex = Math.floor(Math.random() * techsCopy.length);
                randomized.push(techsCopy[randomIndex]);
                techsCopy.splice(randomIndex, 1);
            }
            setRandomizedTechs(randomized);
        };

        randomizeTechs();
    }, []);

    return (
        <div
            className="bg-gradient-to-b from-black via-black to-gray-800 w-full min-h-screen h-full"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Skills
                    </p>
                    <p className="py-6">These are the technologies I've worked with</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 sm:px-0 lg:px-12">
                    {randomizedTechs.map(({ src, title, style }, index) => (
                        <div
                            key={index}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg flex flex-col justify-between ${style}`}
                        >
                            <img src={src} alt={title} className="w-20 mx-auto"/>
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;