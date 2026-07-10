function Navbar(){

return (

<nav className="
border-b-4
border-white
p-6
flex
justify-between
items-center
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

<a href="#about">
About
</a>

<a href="#projects">
Projects
</a>

<a href="#contact">
Contact
</a>

</div>

</nav>

)

}

export default Navbar;