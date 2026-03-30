import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Codigo Limpio",
        description: `Escribo codigo mantenible, actualizable y escalable, capaz
        de adaptarse al paso del tiempo.`
    },

    {
icon: Rocket,
title: "Optimización",
description: `Optimizando el codigo y entregando experiencias de usuario 
rapidas e inmediatas.`
},

{
icon: Users,
title: "Colaboración",
description: "Adaptado a trabajar en equipo para hacer toda idea posible."
},

{
icon: Lightbulb,
title: "Inovación",
description: "Aprenddo e implemento las nuevas tecnologías y mejores practicas de nuestra actualidad."
},
];

export const Acerca_De = () => {
    return (
    <section id="Acerca_De" className="py-32 relative overflow-hidden"> 
        <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16">
        {/* Columna Izquierda */}
        <div className="space-y-8">
            <div className="animate-fade-in">
            <span className="
            text-secondary-foreground text-sm font-medium 
            tracking-wider uppercase"
            >
                Acerca De Mi
            </span>
           

        <h2 
        className="
        text-4xl md:text-5xl font-bold leading-tight animate-fade-in
         animation-delay-100 text-secondary-foreground"
         >
            Construyendo el futuro, 
            <span className="font-serif italic font-normal text-white">
                {" "}
                 linea por linea. 
                 </span>
        </h2>

        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
<p>
Soy Desarrollador Web Full Stack con formación académica en la Universidad
 Tecnológica Nacional (UTN), con experiencia tanto en desarrollo como en gestión 
 y administración de datos. 
 </p>

 <p>
 Mi enfoque combina pensamiento lógico, 
 resolución de problemas y una visión práctica orientada a resultados concretos.
  </p>

<p>
    Me especializo en construir aplicaciones Web modernas, funcionales y escalables,
    utilizando tecnologías como JavaScript, TypeScript, React, Node.js y 
    bases de datos SQL.
    </p>
    <p>
    Cuidando tanto la arquitectura interna como la experiencia del usuario, 
    y construyendo así soluciones escalables y eficientes tanto 
    en Front-End como en Back-End, poniendo especial atención en el rendimiento
    la claridad del código, buscando siempre un equilibrio entre 
    la funcionalidad y la experiencia del usuario.
    Disfruto transformar ideas en productos digitales reales,
    trabajando con tecnologías actuales y buenas prácticas de desarrollo.
</p>

<p>
Me adapto con facilidad a equipos de trabajo, 
pero también me desempeño con autonomía en proyectos independientes.
 Para mí, cada proyecto es una oportunidad de optimizar, 
 mejorar y aportar valor real.
            </p>

<p>
                Cuando no estoy programando, suelo explorar nuevas tecnologías, 
                perfeccionar mis habilidades técnicas y desarrollar proyectos 
                personales que me permitan experimentar y crecer profesionalmente.
                 También me interesa el mundo creativo digital, lo que me ayuda a 
                 mantener una mirada integral entre lo técnico y lo visual.
</p>
</div>

<div className="mt-12 space-y-4 glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
<p className=" text-lg font-medium italic text-foreground">
Mi misión es transformar ideas en soluciones digitales funcionales,
 eficientes y escalables, creando productos que generen impacto real
  y aporten valor a quienes los utilizan.
  </p>

  <p className="text-lg font-medium italic text-foreground">
Busco desarrollar aplicaciones
 web que no solo cumplan con los objetivos técnicos,
 sino que también estén pensadas estratégicamente para crecer,
  optimizar procesos y mejorar la experiencia de las personas
   que interactúan con ellas.
   </p>
   
   <p className="text-lg font-medium italic text-foreground">
Creo en la combinación entre tecnología, claridad y propósito:
 cada línea de código debe tener una intención, 
 cada decisión técnica debe responder a una necesidad real
  y cada proyecto debe estar preparado para evolucionar en el tiempo.
</p>
</div>
    </div>

    {/* Columna Derecha - Objetos Destacados */}
    <div className="grid sm:grid-cols-2 gap-6">
        {highlights.map((item, idx) => (
            <div 
            key={idx} 
            className="glass p-6 rounded-2xl animate-fade-in"
            style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
                <div
                 className="w-12 h-12 rounded-xl bg-primary/10 
                flex items-center justify-center mb-4 hover:bg-primary/20">
                    <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 
                className="text-lg font-semibold mb-2">
                    {item.title}
                    </h3>
                <p 
                className="text-sm text-muted-foreground">
                    {item.description}
                    </p>
            </div>
        ))}

    </div>

        </div>
                </div>
                    </div>
    </section>
    );
};