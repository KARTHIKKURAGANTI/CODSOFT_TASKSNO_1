import { FaGithub, FaLinkedin, FaEnvelope,FaPhone } from "react-icons/fa";


function Contact(){

    return(

        <section
        id="contact"
        className="
        px-10
        pt-10
        pb-[70px]
        ">


            <h2 className="
            text-5xl
            font-black
            uppercase
            text-sky-600
            ">
                Contact
            </h2>



            <p className="
            mt-8
            text-2xl
            font-bold
            ">
                Let's build something amazing together.
            </p>



            <div className="
            mt-10
            flex
            gap-6
            flex-wrap
            ">


                <a
                href="mailto:urstrulykartheeek@gmail.com"
                className="
                border-4
                border-yellow-500
                p-5
                flex
                items-center
                gap-3
                font-black
                uppercase
                hover:bg-white
                hover:text-black
                "
                >

                    <FaEnvelope />

                    Email

                </a>



                <a
                href="https://github.com/KARTHIKKURAGANTI"
                target="_blank"
                className="
                border-4
                border-yellow-500
                p-5
                flex
                items-center
                gap-3
                font-black
                uppercase
                hover:bg-white
                hover:text-black
                "
                >

                    <FaGithub />

                    Github

                </a>



                <a
                href="https://linkedin.com/in/kuragantilakshmikarthik"
                target="_blank"
                className="
                border-4
                border-yellow-500
                p-5
                flex
                items-center
                gap-3
                font-black
                uppercase
                hover:bg-white
                hover:text-black
                "
                >

                    <FaLinkedin />

                    LinkedIn

                </a>


            </div>
            <div className="flex items-center gap-3 pt-10">
                    <FaPhone className="text-sky-400 text-xl" />

                    <span>
                        +91 7989319222
                    </span>
                </div>


        </section>

    )

}


export default Contact;