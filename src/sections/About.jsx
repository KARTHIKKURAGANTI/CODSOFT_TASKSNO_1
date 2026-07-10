function About() {
    return (
        <section
            id="about"
            className="
                px-10
                py-5
                mt-10
                border-t-4
                border-white
                border-b-4
                bg-black
            "
        >
            <h2
                className="
                    text-6xl
                    font-black
                    uppercase
                    text-sky-600
                "
            >
                About Me
            </h2>

            <div
                className="
                    mt-50
                    max-w-7xl
                    pt-25
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
