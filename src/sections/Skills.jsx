import skills from "../data/skills";


function Skills(){

    return(

        <section
        id="skills"
        className="
        min-h-screen
        px-10
        py-20
        border-b-4
        border-white
        bg-black
        ">


            <h2 className="
                text-6xl
                font-black
                uppercase
                text-sky-600
            ">
                Skills
            </h2>



            <div className="
                mt-12
                grid
                md:grid-cols-2
                gap-10
            ">


            {
                skills.map((skill)=>{

                    const CategoryIcon = skill.icon;


                    return (

                    <div
                    key={skill.category}
                    className="
                    border-4
                    border-white
                    p-8
                    shadow-[10px_10px_0px_white]
                    ">


                        <div className="
                        flex
                        items-center
                        gap-5
                        ">

                            <CategoryIcon
                            className="text-5xl"
                            />


                            <h3 className="
                            text-3xl
                            font-black
                            uppercase
                            text-yellow-500
                            ">
                                {skill.category}
                            </h3>

                        </div>



                        <div className="
                        mt-8
                        space-y-4
                        ">


                        {
                            skill.items.map((item)=>{

                                const Icon = item.icon;


                                return(

                                    <div
                                    key={item.name}
                                    className="
                                    flex
                                    items-center
                                    gap-4
                                    text-xl
                                    font-bold
                                    ">


                                        <Icon />

                                        <span>
                                            {item.name}
                                        </span>


                                    </div>

                                )

                            })
                        }


                        </div>


                    </div>

                    )

                })
            }


            </div>


        </section>

    )

}


export default Skills;