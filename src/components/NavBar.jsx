import { cn } from "@/lib/utils";
import { X, Menu } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Experience", href: "#experience"},
    {name: "Contact", href: "#contact"}
];

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    // After scrolling the navbar should become transparent and fixed at the top
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10);
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);        // to handle memory leaks
    }, []);

    return (
        <nav 
            className={cn(
                "fixed w-full z-40 transition-all duration-300", 
                isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
            )}
        >
            <div className="container flex items-center justify-between">
                <a 
                    className="text-xl font-bold text-primary flex items-center"
                    href="#hero"
                >
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Ryan Sam Varghese</span>{" "}Portfolio
                    </span>
                </a>

                {/* Desktop Navigation Bar */}
                {/* On a normal screen, nav items dissappear if the window is too small */}
                <div className="hidden md:flex space-x-8">
                    {
                        // Loop through each navItem and return a clickable text linked to the appropriate section
                        navItems.map((item, key) => (
                            <a key={key} href={item.href} className="text-foreground/80 transition-colors hover:text-primary duration-200">
                                {item.name}
                            </a>
                        ))
                    }
                </div>
                
                {/* Mobile Navigation Bar */}
                {/* Creating a vertical menu */}
                <button 
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>

                <div className={cn(
                    "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col",
                    "items-center justify-center transition-all duration-200 md:hidden",
                    isMenuOpen ? 
                        "opacity-100 pointer-events-auto" 
                        : "opacity-0 pointer-events-none"
                )}>
                    <div className="flex flex-col space-y-8 text-xl">       {/* In mobile mode, we need a vertical menu that takes up the entire screen */}
                        {
                            // Loop through each navItem and return a clickable text linked to the appropriate section
                            navItems.map((item, key) => (
                                <a 
                                    key={key} 
                                    href={item.href} 
                                    className="text-foreground/80 transition-colors hover:text-primary duration-200"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))
                        }
                    </div>
                </div>

            </div>
        </nav>
    );
};