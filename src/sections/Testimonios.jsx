import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useState } from "react"

const testimonios = [
    {
        quote: "Santiago se destacó por su organización y precisión en la gestión de nuestra documentación y bases de datos. Su capacidad para sistematizar información y mantener todo actualizado nos facilitó mucho el trabajo diario.",
        author: "Adriana J. Kirzner",
        role: "Adm. Mabresama",
        avatar: ""
    },

    {
        quote: "Santiago hizo un trabajo excepcional organizando nuestros mapas globales y creando sucursales de manera eficiente usando la API de Google Maps. Su conocimiento técnico y autonomía hicieron que los procesos que antes eran lentos se agilizaran significativamente.",
        author: "Magalí Gonzalez",
        role: "Atom Protect",
        avatar: ""
    },

    {
        quote: "Con Santiago siempre tuvimos la tranquilidad de que los datos estaban correctos y accesibles. Su atención al detalle y rapidez en la gestión de información hicieron que nuestro equipo trabajara de forma más eficiente.",
        author: "Alejandra Kirzner",
        role: "Adm. Mabresama",
        avatar: ""
    },
    
    {
        quote: "Trabajar con Santiago fue una experiencia excelente. Supo entender nuestras necesidades desde el primer momento y transformar nuestras ideas en un sitio funcional y moderno. Su conocimiento técnico y su capacidad para organizar la información hicieron que todo el proyecto se realizara de forma rápida y eficiente.",
        author: "Pablo Guillermo Lopez",
        role: "Cliente",
        avatar: ""
    },
]

export const Testimonios = () => {
    const [activeIdx, setActiveIdx] = useState(0);

    const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonios.length)
    }

    const previous = () => {
    setActiveIdx((prev) => (prev -1 + testimonios.length) % testimonios.length);
    }
    return (
        <section
        id="Testimonios"
        className="py-32 relative overflow-hidden"
        >
            <div className="absolute top-1/2 left-1/2
            w-200 h-200 bg-primary/5
            rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" 
            />
            <div
            className="container mx-auto
            px-6 relative z-10"
            >

            {/* Header de la Sección */}
            <div
            className="text-center max-w-3xl
            mx-auto mb-16"
            >
            <span
            className="text-secondary-foreground
            text-sm font-medium tracking-wider
            uppercase animate-fade-in"
            >
                Quienes trabajaron conmigo.
            </span>
            <h2
            className="text-4xl md:text-5xl
            font-bold mt-4 mb-6 animate-fade-in
            animation-delay-100 text-secondary-foreground"
            >
            Algunas palabras{" "}
            <span
            className="font-serif italic
            font-normal text-white"
            >
            de personas increibles con las que tuve la suerte de colaborar.
            </span>
            </h2>
            </div>

            {/* Caroussel de Testimonios */}
            <div className="max-w-4xl mx-auto">
                <div className="relative">
                    {/* Testimonio Principal */}
                    <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
                        <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                            <Quote className="w-6 h-6 text-primary-foreground" />
                        </div>

                        <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">"{testimonios[activeIdx].quote}"</blockquote>

                        <div className="flex items-center gap-4">
                            <img
                             src={testimonios[activeIdx].avatar} 
                             alt={testimonios[activeIdx].avatar}
                             className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                              />
                              <div className="flex items-center gap-4">
                                <div className="font-semibold">{testimonios[activeIdx].author}</div>
                                <div className="text-sm text-muted-foreground">
                                    {testimonios[activeIdx].role}
                                </div>
                            </div>
                        </div>
                    </div>

                {/* Navegación entre Testimonios */}
                <div className="flex items-center justify-center gap-4 mt-8">
                    <button 
                    onClick={previous} 
                    className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all" 
                    >
                        <ChevronLeft />
                    </button>

                    <div className="flex gap-2">
                        {testimonios.map((_, idx) => (
                    <button 
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        idx === activeIdx ? "w-8 bg-primary"
                         : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`} 
                    />
                    ))}
                    </div>

                    <button className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all" onClick={next}>
                        <ChevronRight />
                    </button>
                </div>
                </div>
            </div>
        </div>
        </section>
    )
}
