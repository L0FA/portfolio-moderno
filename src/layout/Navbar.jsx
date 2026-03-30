import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
    { href: "#Acerca_De", label: "Acerca de"},
    { href: "#Proyectos", label: "Proyectos"},
    { href: "#Experiencia", label: "Experiencia"},
    { href: "#Testimonios", label: "Testimonios"},
    ]

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
                setIsScrolled(window.scrollY > 50);
            };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
            }, []);


    return (
        <header
         className={`fixed trop-0 left-0 right-0  transition-all duration-500
            ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"}  
        z-50`}
        >
            
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a 
                href="#" 
                className="text-3xl font-bold tracking-tight hover:text-primary"
                >
                    SLF
                     <span className="text-primary">
                        .
                    </span>
                </a>

                {/* Navbar de Escritorio */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1 ">
                        {navLinks.map((link, index) => (
                    <a 
                    href={link.href} 
                    key={index} 
                    className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
                    >
                        {link.label}
                        </a>
                ))}
                    </div>
                </div>

                {/* Botón Call To Action */}

                <div className="hidden md:block">
                    <a href="#Contacto">
                    <Button size="sm"> Interesado? Contactame! </Button>
                    </a>
                </div>

            {/* Hamburguesa para Telefonos / Botón de Menu para Telefonos */}
            <button
             className="md:hidden p-2 text-foreground cursor-pointer"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
        {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>
            </nav>

            {/* Menú para Telefonos */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-strong animate-fade-in">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                {navLinks.map((link, index) => (
                    <a 
                    href={link.href} 
                    key={index} 
                    className="text-lg text-muted-foreground hover:text-foreground py-2"
                    >
                        {link.label}
                        </a>
                ))}

                <a href="#Contacto">
                <Button> Interesado? Contactame! </Button>
                </a>
            </div>
            </div>
            )}
        </header>
        
        
    )
}