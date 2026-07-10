import {
    FaReact,
    FaPython,
    FaNodeJs,
    FaGitAlt
} from "react-icons/fa";

import {
    SiFastapi,
    SiTailwindcss,
    SiJavascript,
    SiPostgresql,
    SiPandas
} from "react-icons/si";


const skills = [

    {
        category: "Frontend",
        icon: FaReact,
        items: [
            {
                name: "React",
                icon: FaReact
            },
            {
                name: "JavaScript",
                icon: SiJavascript
            },
            {
                name: "Tailwind CSS",
                icon: SiTailwindcss
            }
        ]
    },


    {
        category: "Backend",
        icon: SiFastapi,
        items: [
            {
                name: "FastAPI",
                icon: SiFastapi
            },
            {
                name: "Node.js",
                icon: FaNodeJs
            },
            {
                name: "PostgreSQL",
                icon: SiPostgresql
            }
        ]
    },


    {
        category: "AI / ML",
        icon: FaPython,
        items: [
            {
                name: "Python",
                icon: FaPython
            },
            {
                name: "pandas",
                icon: SiPandas
            }
        ]
    },


    {
        category: "Tools",
        icon: FaGitAlt,
        items: [
            {
                name: "Git",
                icon: FaGitAlt
            }
        ]
    }

];


export default skills;