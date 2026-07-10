function About() {
    return (
        <section
            id="about"
            className="
                px-10
                py-10
                mt-10
                relative
                before:absolute
                before:top-0
                before:right-0
                before:w-[70%]
                before:h-1
                before:bg-white

                after:absolute
                after:bottom-0
                after:left-0
                after:w-[70%]
                after:h-1
                after:bg-white

                bg-black
            "
        >
            <h2
                className="
                    text-5xl
                    font-black
                    uppercase
                    text-sky-600
                "
            >
                About Me
            </h2>

            <div
                className="
                    max-w-7xl
                    pt-10
                    text-xl
                    font-bold
                    leading-relaxed
                "
            >
                <p>
                    I am Karthik, a B.Tech Artificial Intelligence and Machine
                    Learning student.
                </p>

                <p className="mt-6">
                    I am passionate about building software solutions and
                    AI-powered applications. I work with technologies like
                    React, FastAPI, Node.js, and Python, while continuously
                    improving my skills in full-stack development, AI/ML, and
                    Data Structures and Algorithms.
                </p>

                <p className="mt-6">
                    Currently exploring scalable web applications, AI systems,
                    and modern software engineering.
                </p>
            </div>
        </section>
    );
}

export default About;
