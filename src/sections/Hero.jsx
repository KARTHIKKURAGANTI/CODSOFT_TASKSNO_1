import profile from "../assets/profile.png";

function Hero(){

    return (
        <section className="
            min-h-screen
            flex
            items-center
            justify-center
            bg-black
        ">

            <div className="
                max-w-6xl
                w-full
                flex
                items-center
                justify-between
                gap-16
            ">

                {/* Left Content */}
                <div>

                    <h1 className="
                        text-7xl
                        font-black
                        uppercase
                        leading-none
                    ">
                        I BUILD
                        <br />
                        AI POWERED
                        <br />
                        APPLICATIONS
                    </h1>

                    <p className="
                        mt-8
                        text-xl
                        font-bold
                    ">
                        AIML Engineer | Full Stack Developer
                    </p>

                   <a
                        href="/Karthik_Resume.docx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                        mt-8
                        inline-block
                        border-4
                        border-yellow-500
                        px-8
                        py-4
                        font-black
                        uppercase
                        hover:bg-white
                        hover:text-black
                        ">
                        View Resume
                    </a>

                </div>


                {/* Right Image */}
                <div>
                    <img
                        src={profile}
                        alt="Karthik"
                        className="
                            w-96
                            h-96
                            object-cover
                            border-4
                            border-y-sky-600
                            border-x--600
                            shadow-[12px_12px_0px_#f59e0b]
                        "
                    />
                </div>

            </div>

        </section>
    )
}

export default Hero;