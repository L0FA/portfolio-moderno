import { Button } from "@/components/Button";
import { useState } from "react";
import {
    ArrowRight,
     Download,
    ChevronDown,
     Github,
       Linkedin,
         } from "lucide-react"
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";



const skills = [
    "React",
    "MongoDB",
    "JavaScript",
    "Tailwind CSS",
    "Node.JS",
    "TypeScript",
    "MySQL",
    "Python",
    "CSS3",
    "HTML5",
    "Git",
    "Github Actions",
    "Express.JS",
    "Vite",
];



export const Hero = () => {

const [particles] = useState(() =>
    Array.from({ length: 30 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 15 + Math.random() * 20,
        delay: Math.random() * 5,
    }))
);



    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Fondo */}
    <div className="absolute inset-0"> 
        <img
         src="/Fondo2.jpg"
         alt="Fondo Hero"
         className="w-full h-full object-cover opacity-40"
         
         />
         <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"/>
    </div>

        {/* Puntos Verdes */}



{particles.map((p, i) => (
    <div
        key={`particle-${i}`}
        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
        style={{
            backgroundColor: "#20B2A6",
            left: `${p.left}%`,
            top: `${p.top}%`,
            animation: `slow-drift ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`
        }}
    />
))}


{/* Contenido del Hero */}

<div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 items-center">

        { /* Columna Izquierda - Contenido en Cadena de Texto */ }

        <div className="space-y-8">
            <div className="animate-fade-in">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                 <span className="w-2 h-2 bg-primary rounded-full animate-pulse" /> 
                    Desarrollador Web Full Stack 
                    </span>
            </div>

            {/* Titular */}

            <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leadin-tight animate-fade-in animation-delay-100">
                    Desarrollo 
                    <span className="text-primary glow-text"> Soluciones Digitales</span>
                    <br />
                    capaces de generar un impacto 
                    
                    <span className="font-serif italic font-normal flex text-white">
                            real y preciso.
                    </span>
                    </h1>
                    <p 
                    className="text-lg text-muted-foreground
                     max-w-lg animate-fade-in animation-delay-200"
                    >
                    Hola, soy Santiago Lopez Fabbri,
                    un Desarrollador Web Full Stack enfocado en crear productos 
                    digitales modernos, escalables y funcionales. Combino diseño intuitivo con 
                    lógica sólida para construir soluciones que no solo se ven bien, 
                    sino que resuelven problemas reales.
                    <br />
                    Trabajo con tecnologías actuales y una mentalidad orientada a los resultados, 
                    adaptándome tanto a equipos de trabajo como a proyectos independientes.
                    </p>
            </div>

            {/* Calls To Action / CTA´S */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                <Button size="lg">
                Contactame!
                <ArrowRight className="w-5 h-5" />
                </Button>
               <AnimatedBorderButton>
                <Download className="w-5 h-5"/>
                    Descargar CV
                </AnimatedBorderButton>
        </div>

        {/* Redes Sociales */}
        <div className="flex items-center gap-4 animate-fade-in animation-deñay-400">
            <span className="text-sm text-muted-foreground">
                Seguime En:
            </span>
            {[
                {icon: Github, href:"https://github.com/L0FA"},
                {icon: Linkedin, href:"https://www.linkedin.com/in/santiago-lopez-fabbri/"},
                
            ].map((social, idx) => (
                <a
                 key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                {<social.icon className="w-5 h-5" />}
                </a>
            ))}
        </div>
        </div>
        {/* Columna Derecha - Imagen de Perfil */}
        <div className="relative animate-fade-in animation-delay-300">
            {/* Imagen del Perfil */}
            <div className="relative max-w-md mx-auto">
                <div className="absolute inset-0 rounded-3xl
                bg-linear-to-br from-primary/30 
                via-transparent to-primary/10 blur-2xl animate-pulse"
                />
                <div 
                className="relative glass rounded-3xl p-2 glow-border">
                    <img 
                    src="/Perfil2.jpeg" 
                    alt="Santiago Lopez Fabbri"
                    className="w-full aspect-4/5 object-cover rounded-2xl"
                    />

                    {/* "Abierto a Contrataciones" */}
<div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
    <div className="flex items-center gap-3">
<div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
    <span className="text-sm font-medium">
        Abierto a Contrataciones
    </span>
</div>
</div>
                    {/* Años de Experiencia */}
                <div className="
                absolute -top-4 -left-4 glass rounded-xl 
                px-4 py-3 animate-float animation-delay-500"
                >
                <div className="text 2xl font-bold text-primary">
                + 2
                </div>
                <div className="text-xs">
                    Años de Experiencia
                </div>
                </div>
                </div>
                </div>
            </div>
        </div>

        {/* Sección de Habilidades */}
        <div className="mt-20 animate-fade-in animation-delay-600">
            <p className="text-sm text-muted-foreground mb-6 text-center">
                Trabajo con las siguientes tecnologías:
            </p>
            <div className="relative overflow-hidden">
                <div className="flex animate-marquee">
                    {[...skills, ...skills].map((skill, idx) => (
                        <div key={idx} className="shrink-0 px-8 py-4">
                            <span
                             className="text-xl font-semibol text-muted-foreground/50
                              hover:text-muted-foreground transition-colors"
                              >
                                {skill}
                                </span>
                            </div>
                    ))}
                </div>
            </div>
        </div>
    </div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 
animate-fade-in animation-delay-800">
<a
href="#about"
className="flex flex-col items-center gap-2 text-muted-foreground
hover:text-primary"
>
<span className="text-xs uppercase tracking-wider"> Scroll </span>
<ChevronDown className="w-6 h-6 animate-bounce" />
</a>
</div>
</section>
);
};
