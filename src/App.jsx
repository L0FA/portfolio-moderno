import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { Acerca_De } from "./sections/Acerca_De.jsx";
import { Proyectos } from "./sections/Proyectos.jsx"
import { Experiencia } from "./sections/Experiencia.jsx"
import { Testimonios } from "./sections/Testimonios.jsx"
import { Contacto } from "./sections/Contacto.jsx"

function App () {
  return <div className="min-h-screen overflow-x-hidden">
    <Navbar />
<main>
  <Hero />
  <Acerca_De />
<Proyectos />
<Experiencia />
<Testimonios />
<Contacto />
</main>
  </div>
}

export default App;