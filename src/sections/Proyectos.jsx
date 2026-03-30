import { ArrowUpRight, Github } from "lucide-react"
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton"

const proyectos = [


{
title: "Portfolio Moderno",

    description: `Portfolio profesional desarrollado como plataforma de
    presentación personal y técnica. El objetivo del proyecto fue construir
    una aplicación web moderna que refleje tanto mis habilidades en desarrollo 
    frontend como mi enfoque en arquitectura y organización de código.
    Fue desarrollado utilizando React y TailwindCSS, priorizando diseño limpio, 
    estructura modular y rendimiento optimizado. La aplicación está organizada
    por secciones dinámicas que permiten una navegación clara e intuitiva, 
    manteniendo coherencia visual y escalabilidad futura.
    Más allá de ser una presentación, este proyecto funciona como demostración 
    práctica de mis conocimientos en desarrollo full stack, buenas prácticas,
    componentización y enfoque orientado a experiencia de usuario.`,

    image:"/projects/Portfolio.png",
    tags: ["React", "Vite", "TailwindCSS", "Node.JS", "JavaScript", "Diseño Responsive"],
    link: "#",
    github: "#"

},

{
title: "Aplicación de Hotelería / Booking",

description: `Aplicación web de gestión y reserva de alojamientos desarrollada 
como proyecto full stack, enfocada en simular el funcionamiento de plataformas 
reales de hotelería. El objetivo principal fue construir un sistema completo 
que permita la visualización, búsqueda y reserva de propiedades, junto con la 
gestión de datos desde el lado del servidor.

La aplicación integra un frontend moderno y dinámico con un backend funcional, 
permitiendo manejar información de usuarios, alojamientos y reservas de manera 
eficiente. Fue desarrollada utilizando tecnologías actuales, priorizando 
rendimiento, escalabilidad y una experiencia de usuario clara e intuitiva.

Se trabajó sobre una arquitectura modular, implementando buenas prácticas de 
desarrollo, consumo de APIs y organización de componentes reutilizables. 
Este proyecto representa una aplicación realista del entorno profesional, 
combinando lógica de negocio, diseño responsive y manejo de datos en tiempo real.`,

image:"/projects/Booking.png",

tags: [
    "React",
    "Vite",
    "TailwindCSS",
    "Node.JS",
    "Express.JS",
    "MongoDB",
    "JavaScript",
    "REST API",
    "Diseño Responsive"
],

link: "#",
github: "https://github.com/L0FA/Pagina-de-Booking"

},

{

title: "Aplicación de Gestión de Tareas",

    description: `Aplicación web full stack diseñada para la gestión eficiente
    de tareas y proyectos personales. Permite crear, editar, eliminar y organizar 
    tareas en tiempo real mediante una interfaz dinámica y clara.
    Desarrollada con JavaScript y React en el frontend, junto a Node.js y 
    base de datos SQL en el backend. Se implementó validación de datos, 
    manejo de estados complejos y arquitectura estructurada para facilitar
    escalabilidad.
    Este proyecto me permitió profundizar en la comunicación cliente-servidor,
    optimización de consultas y buenas prácticas de organización de código.`,

    image: "/",
    tags: ["React", "Vite", "TailwindCSS", "Node.JS", "JavaScript", "MySQL", "CRUD", "RESTAPI", "Diseño Responsive"],
    link: "#",
    github: "#"

},

{

    title: "Plataforma de E-Commerce",

    description: `Plataforma de comercio electrónico enfocada en ofrecer 
    una experiencia de compra fluida y moderna. Incluye catálogo dinámico de 
    productos, carrito de compras y sistema de gestión desde el backend.
    El frontend fue desarrollado con React, priorizando rendimiento y experiencia 
    de usuario, mientras que el backend gestiona productos, stock y persistencia de 
    datos.
    Se trabajó especialmente en la lógica de negocio, estructura de datos
    y optimización del flujo de usuario.`,

    image: "/",
    tags: ["React", "JavaScript", "MySQL", "Node.JS", "Responsive UI"],
    link: "#",
    github: "#"


},

{

    title: "Dashboard Administrativo",

    description: `Panel administrativo diseñado para la visualización
    y gestión de datos mediante gráficos dinámicos y tablas interactivas.
    El sistema permite administrar información en tiempo real y organizar 
    grandes volúmenes de datos de manera clara y estructurada.
    Este proyecto reforzó mis habilidades en diseño de arquitectura backend, 
    consumo de APIs y estructuración modular del frontend.`,

    image: "/",
    tags: ["React", "Dashboard", "Integraciones de API", "Diseño de Modulos", "JavaScript"],
    link: "#",
    github: "#"
},

{

    title: "Landing Page Profesional",
    description: `Landing page moderna desarrollada con enfoque en diseño limpio,
    rendimiento y adaptabilidad a dispositivos móviles.
    Se priorizó una estructura semántica correcta,
    tiempos de carga optimizados y una experiencia visual clara orientada a conversión.
    El proyecto destaca por su atención al detalle en el diseño y su implementación
    técnica eficiente.`,

    image: "/",
    tags: ["React", "TailwindCSS", "Node.JS", "JavaScript"],
    link: "#",
    github: "#"
},
]

export const Proyectos = () => {
    return (
        <section id="Proyectos" className="py-32 relative-overflow-hidden">

            {/* Brillos de Fondo*/}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"/>
            <div className=" container mx-auto px-6 relative z-10">

                {/* Header de Sección */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in"> 
                        Trabajos Destacados 
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                            Proyectos que
                            <span className="font-serif italic font-normal text-white">
                                {" "}
                                 logran un impacto.
                                 </span>
                        </h2>
                        <p className="text-muted-foreground animate-fade-in animation-delay-200">
                            Una selección de mis trabajos mas recientes, desde aplicaciones web complejas
                            a herramientas innovadoras, que otorguen soluciones a problemas del día a día 
                            en nuestro mundo.
                        </p>
                </div>

                {/* Planilla de Proyectos */}
                <div className="grid md:grid-cols-2 gap-8">
                    {proyectos.map((project, idx) => (
                        <div
                         key={idx}
                          className="group glass rounded 2xl overflow-hidden animate-fade-in md:row-span-1"
                          style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                          >
                            
                            
                            {/* Imagenes */}
                        <div className="relative overflow-hidden aspect-video">
                        <img
                         src={project.image}
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />

                        <div
                        className="absolute inset-0 bg-linear-to-t
                         from-card via-card/50 to-transparent opacity-60"
                        />
                        {/* Links de Overlay */}
                        <div className="absolute inset-0 flex items-center 
                        justify-center gap-4 opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300">
                            <a 
                            href={project.link} 
                            className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                <ArrowUpRight className="w-5 h-5" />
                            </a>
                            <a 
                            href={project.github}
                            className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                        </div>

                        {/* Contenido */}
                        <div className="p-6 space-y-4">
                        <div className="flex items-start justify-between">
                            <h3 className="text-xl font-semibold
                             group-hover:text-primary transition-colors">{project.title}</h3>
                            <ArrowUpRight
                            className="w-5 h-5text-muted-foreground
                             group-hover:text-primary group-hover:translate-x-1
                              group:hover:-translate-y-1 transition-all" 
                              
                              />
                        </div>
                        <p className="text-muted-foreground text-sm">
                            {project.description}
                            </p>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, tagIdx) => (
                        <span
                         key={tagIdx}
                         className="px-4 py-1.5 rounded-full
                          bg-surface text-xs font-medium border 
                          border-border/50 text-muted-foreground
                           hover:border-primary/50 hover:text-primary
                            transition-all duration-300"
                            >
                                {tag}
                                </span>
                        ))}
                        </div>
                        </div>
                        </div>
                    ))}
                </div>

                {/* Ver Todos CTA */}
                <div className=" text-center mt-12 animate-fade-in animation-delay-500">
                    <AnimatedBorderButton>
                        Ver Todos Los Proyectos
                        <ArrowUpRight className="w-5 h-5" />
                        </AnimatedBorderButton>
                </div>
                </div>
        </section>
    );
};
