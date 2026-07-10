function Navbar(){

return (

<nav className="
fixed top-0 left-0 w-full z-50 bg-black
border-b-2
border-white
shadow-[0_2px_15px_rgba(255,255,255,0.8)]
p-6
flex
justify-between
items-center
hover:shadow-[0_2px_15px_rgba(255,255,255,1)]
">

<h1 className="
text-3xl
font-black
uppercase
">
Karthik<span className="text-sky-600">.</span>dev
</h1>


<div className="
flex
gap-8
font-bold
uppercase
">

<a href="#about" className="
hover:text-sky-600
">
About
</a>

<a href="#projects" className="
hover:text-sky-600
">
Projects
</a>

<a href="#contact" className="
hover:text-sky-600
">
Contact
</a>

</div>

</nav>

)

}

export default Navbar;