import { AlertCircle, CheckCircle, Mail, MapPin, Phone, Send} from "lucide-react";
import {Button} from "@/components/Button"
import { useState } from "react";
import emailjs from "@emailjs/browser"

const InfoContacto = [
    {
        icon: Mail,
        label: "Email",
        value: "santiagolopez@portfolioslf.com",
        href: "santiagolopez@portfolioslf.com",
    },

    {
        icon: MapPin,
        label: "Ubicación",
        value: "CABA, Buenos Aires, Argentina",
        href: "#",
    },
];

export const Contacto = () => {
    const [formData, setFormData] = useState({
        Nombre: "",
        Email: "",
        Mensaje: ""
    })
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        type: null, // "Exito" o "Error"
        Mensaje: "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setSubmitStatus({ type: null, message:""})
        try {
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            throw new Error(
                "Error: Falta configuración en EmailJS. Por favor, revisa las variables de tu entorno de recepción de correos electronicos."
            );
        }

        await emailjs.send(serviceId, templateId, {
            Nombre: formData.Nombre,
            Email: formData.Email,
            Mensaje: formData.Mensaje,
        },
         publicKey
        );

        setSubmitStatus({
            type: "Exito",
            Mensaje: "El mensaje fue enviado exitosamente! Gracias. En las brevedades me contacto con vos."
        });
        setFormData({ Nombre: "", Email: "", Mensaje: "" })
        } catch (err) {
        console.error("Error de EmailJS:", err)
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <section 
        id="Contacto"
        className="py-32 relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-14 left-14 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            </div>

<div className="container mx-auto px-6 relative z-10">

    <div className="text-center max-w-3xl mx-auto mb-16">
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
                Podes contar conmigo.
            </span>
            <h2
            className="text-4xl md:text-5xl
            font-bold mt-4 mb-6 animate-fade-in
            animation-delay-100 text-secondary-foreground"
            >
            Contactame y{" "}
            <span
            className="font-serif italic
            font-normal text-white"
            >
            hagamos realidad tus proyectos.
            </span>
            </h2>
            <p className="text-muted-foreground animate-fade-in animation-delay-300">
            ¿Tenes una idea en mente? Me encantaría escucharla. Mandame un mensaje, y discutamos como podemos llevarla a cabo juntos.
            </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
                    <form 
                    className="space-y-6"
                    onSubmit={handleSubmit}>
                    <div>
                        <label 
                        htmlFor="Nombre" 
                        className="block text-sm font-medium mb-2"
                        > 
                        Nombre 
                        </label>
                        <input
                         id="Nombre"
                          type="text"
                          required
                          placeholder="Tu nombre es..."
                          value={formData.Nombre}
                          onChange={(e) => 
                            setFormData({ ...formData, Nombre: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"/>
                    </div>

                     <div>
                        <label 
                        htmlFor="Email" 
                        className="block text-sm font-medium mb-2"
                        > Email </label>
                        <input 
                        id="Email"
                          type="email" 
                          required
                          placeholder="mail@ejemplo.com"
                          value={formData.Email}
                          onChange={(e) => 
                            setFormData({ ...formData, Email: e.target.value})
                          }
                          className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                           />
                    </div>


                     <div>
                        <label 
                        htmlFor="Mensaje" 
                        className="block text-sm font-medium mb-2"
                        > Mensaje </label>
                        <textarea
                        id="Mensaje"
                          type="text"
                          rows={5}
                          required
                          placeholder="Deja tu mensaje aca!" 
                          value={formData.Mensaje}
                          onChange={(e) => 
                            setFormData({ ...formData, Mensaje: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                          />
                    </div>
                    <Button
                     className="w-full"
                      type="submit"
                       size="lg" 
                       disabled={isLoading}
                       >
                        {isLoading ? (
                            <>
                    Enviando...
                    </>
                    ) : (
                        <>
                    Enviar Mensaje
                    <Send className="w-5 h-5"/>
                        </>
                    
                    )}
                        </Button >

                        {submitStatus.type && (
                            <div
                            className={`flex items-center gap-3
                                p-4 rounded-xl ${
                                    submitStatus.type === "Exito"
                                    ? "bg-green-500/10 border border-green-500/20 text-green-400"
                                    : "bg-red-500/10 border border-red-500/20 text-red-400"
                                }`}
                                >
                                    {submitStatus.type === "Exito" ? (
                                        <CheckCircle className="w-5 h-5 shrink-0" />
                                    ) : (
                                        <AlertCircle className="w-5 h-5 shrink-0" /> 
                                    )}
                                    <p className="text-sm">{submitStatus.Mensaje}</p>
                                    </div>
                        )}
                    </form>
                </div>

                {/* Información de Contacto */}
                <div className="space-y-6 animate-fade-in animation-delay-400">
                    <div className="glass rounded-3xl p-8">
                        <h3 className="text-xl font-semibold mb-6">
                            Información de contacto
                        </h3>
                        <div className="space-y-4">
                            {InfoContacto.map((item, i) => 
                            <a
                                key={i}
                                href={item.href}
                                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors" 
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center ">
                                    <item.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-sm text-muted-foreground">
                                            {item.label}
                                        </div>
                                        <div className="font-medium wrap-break-word">{item.value}</div>
                                    </div>
                            </a>
                        )}
                        </div>
                    </div>

                    { /* Carta de Disponibilidad */}
                    <div className="glass rounded-3xl p-8 border border-primary/30" >
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                        <span className="font-medium">Actualmente disponible </span>
                        </div>
                        <p className="text-muted-foreground text-sm">
                            En este momento estoy abierto a nuevas oportunidades y a proyectos inovadores.
                             Ya sea que necesites un ingeniero de tiempo completo o un pasante Freelance, podes contactarte conmigo!
                        </p>
                        </div>
                </div>
            </div>
    </div>
</div>
        </section>
    )
}
