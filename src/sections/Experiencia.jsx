const experiencias =  [

       {
        period: "2025 - Presente",
        role: "Desarrollador Freelance",
        company: "Autonomo",
        description: "Desarrollo de soluciones web a medida para clientes enfocadas en rendimiento, diseño moderno y experiencia de usuario. Trabajo en la creación de sitios y aplicaciones completas, desde la planificación hasta la implementación, integrando frontend y backend con tecnologías actuales.",
        current: true,
        technologies: [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "TailwindCSS",
  "HTML5",
  "CSS3",
  "Git",
  "Vite"
],

    },

    {
        period: "2024 - 2025",
        role: "Administrador de Datos",
        company: "Administración Mabresama",
        description: "Encargado de administrar, documentar, archivar, modificar y crear archivos sensibles de la administración mediante el uso de Bases de Datos locales en Excel y en servidores con herramientas como MySQL, MongoDB y AdminProp.",
        current: false,
        technologies: ["MongoDB", "Git", "Node.JS", "HTML5", "JavaScript", "CSS3", "TailwindCSS", "Excel"],
    },

     {
        period: "2023 - 2024",
        role: "Desarrollador Web Full-Stack",
        company: "Universidad Tecnica Nacional UTN FRBA",
        description: "Diplomado en Desarrollo Web Front-End y Back-End.",
        current: false,
        technologies: ["React", "Typescript", "Next.JS", "MongoDB", "Git", "Vite.JS", "Node.JS", "HTML5", "Express.JS", "JavaScript", "Python", "CSS3", "TailwindCSS", "Angular"],
    },
]

export const Experiencia = () => {
    return (
        <section
        id="Experiencia"
        className="py-32 relative overflow-hidden"
        >
            <div
            className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
            />

        <div className="container mx-auto px-6 relative z-10">

        {/* Header de Sección */}
        <div className="max-w-3xl mb-16">
            <span
            className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in"
            >
                Mi Trayectoria como Desarrollador.
            </span>
            <h2
            className="text-4xl md_text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground"
            >
            La experiencia que tengo, {" "}
             <span className="font-serif italic font-normal text-white">
                {" "} mostrada en cada codigo.
                 </span>
            </h2>

            <p
            className="text-muted-foreground animate-fade-in animation-delay-200"
            >
            Una linea de tiempo de mi progreso profesional, desde un principiante curioso, hasta un Desarrollador Web Full Stack diplomado.
            </p>
        </div>

        {/* Linea de Tiempo */}

        <div className="relative">
            <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

        {/* Items de Experiencia */}

<div className="flex flex-col gap-16">
{experiencias.map((exp, idx) => (

<div key={idx} 
className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
style={{animationDelay: `${(idx + 1) * 150}ms` }}
>

{/* Puntos de Linea de Tiempo */}

<div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
{exp.current && <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />}
</div>

{/* Contenido */}
<div
 className={`pl-8 md:pl-0 ${
    idx % 2 === 0 
    ? "md:pr-16 md:text-right" 
    : "md:col-start-2 md:pl-16"
    }`}
    >
    <div className={`glass p-6 rounded-2xl border border-primary/30 hover_border-primary/50 transition-all duration-500`}>
        <span className="text-sm text-primary font-medium">
            {exp.period}
            </span>
        <h3 className="text-xl font-semibold mt-2">
            {exp.role}
            </h3>
        <p className="text-muted-foreground">
            {exp.company}
            </p>
        <p className="text-sm text-muted-foreground mt-4">
            {exp.description}
            </p>
        <div 
        className={`flex flex-wrap gap-2 mt-4 ${
            idx % 2 === 0 ? "md:justift-end" : ""
            }`}>
            {exp.technologies.map((tech, techIdx) => (
            <span
            key={techIdx}
            className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground">{tech}</span>
        ))}
        </div>
    </div>
</div>
</div>

))}
</div>
</div>
</div>
</section>
    )
}
