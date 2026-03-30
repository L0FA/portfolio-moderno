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
    link: "https://portfolioslf.com",
    github: "https://github.com/L0FA/portfolio-moderno"

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
