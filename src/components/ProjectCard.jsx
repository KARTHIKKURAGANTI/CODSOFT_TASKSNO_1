

function ProjectCard({project}){

    return(

        <div
        className="
        border-4
        border-white
        p-6
        shadow-[10px_10px_0px_white]
        "
        >

            <h3 className="
            text-3xl
            font-black
            uppercase
            ">
                {project.title}
            </h3>


            <p className="
            mt-5
            text-lg
            font-bold
            ">
                {project.description}
            </p>


            <div className="
            mt-5
            flex
            gap-3
            flex-wrap
            ">

                {
                    project.tech.map((item)=>(
                        
                        <span
                        key={item}
                        className="
                        border-2
                        border-white
                        px-3
                        py-1
                        font-bold
                        "
                        >
                            {item}
                        </span>

                    ))
                }

            </div>


            <a
            href={project.github}
            target="_blank"
            className="
            inline-block
            mt-6
            border-4
            border-white
            px-5
            py-2
            font-black
            uppercase
            hover:bg-white
            hover:text-black
            "
            >

                Github

            </a>


        </div>

    )

}


export default ProjectCard;