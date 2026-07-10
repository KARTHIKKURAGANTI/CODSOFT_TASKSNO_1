import projects from "../data/project";
import ProjectCard from "../components/ProjectCard";


function Projects(){

    return(

        <section
        id="projects"
        className="
        px-10
        pt-10
        pb-17.5
        bg-black
        ">

            <h2
            className="
            text-5xl
            font-black
            uppercase
            text-sky-600
            "
            >
                Projects
            </h2>


            <div
            className="
            mt-12
            grid
            md:grid-cols-2
            gap-10
            "
            >

                {
                    projects.map((project)=>(
                        <ProjectCard
                        key={project.title}
                        project={project}
                        />
                    ))
                }

            </div>


        </section>

    )

}


export default Projects;