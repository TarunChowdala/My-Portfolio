'use client'
import { useEffect, useRef, useState } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('top');
    const navRef = useRef();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const closeMenu = () => {
        setIsOpen(false);
    }

    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        closeMenu();
        
        const targetElement = document.getElementById(sectionId);
        if (targetElement) {
            // Use Lenis if available, otherwise fallback to native scroll
            if (window.lenis) {
                window.lenis.scrollTo(targetElement, {
                    offset: -80,
                    duration: 1.2,
                });
            } else {
                // Fallback to smooth scroll
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
                // Adjust for offset
                setTimeout(() => {
                    window.scrollBy(0, -80);
                }, 100);
            }
        }
    }

    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark');
        if (document.documentElement.classList.contains('dark')) {
            localStorage.theme = 'dark';
        } else {
            localStorage.theme = 'light';
        }
    }

    useEffect(() => {
        // -------- light mode and dark mode -----------
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }

        // -------- Active section detection -----------
        const sections = ['top', 'about', 'skills', 'work', 'experience', 'contact'];
        
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150; // Offset for better detection

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        setActiveSection(sections[i]);
                        break;
                    }
                }
            }

            // Check if at top
            if (window.scrollY < 100) {
                setActiveSection('top');
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <>
            {/* Mobile menu button */}
            <button 
                onClick={toggleMenu}
                className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-lg bg-white/80 dark:bg-darkHover/80 backdrop-blur-sm shadow-lg"
            >
                <img src="/assets/menu-black.png" alt="Menu" className="w-6 dark:hidden" />
                <img src="/assets/menu-white.png" alt="Menu" className="w-6 hidden dark:block" />
            </button>

            {/* Left Sidebar */}
            <nav 
                ref={navRef} 
                className={`fixed left-0 top-0 h-full w-64 bg-white/90 dark:bg-darkTheme/90 backdrop-blur-lg border-r border-gray-200 dark:border-white/10 z-40 transition-transform duration-300 ${
                    isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
                }`}
            >
                <div className="flex flex-col h-full p-6">
                    {/* Logo */}
                    <div className="mb-8">
                        <a href="#top" onClick={(e) => handleNavClick(e, 'top')}>
                            <img src="/assets/venture.png" alt="Logo" className="w-48 dark:hidden" />
                            <img src="/assets/venture_white.png" alt="Logo" className="w-48 hidden dark:block" />
                        </a>
                    </div>

                    {/* Navigation Links */}
                    <ul className="flex flex-col gap-2 flex-1 font-Ovo">
                        <li>
                            <a 
                                href="#top" 
                                onClick={(e) => handleNavClick(e, 'top')}
                                className={`block px-4 py-2 rounded-lg transition ${
                                    activeSection === 'top' 
                                        ? 'bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white shadow-md' 
                                        : 'hover:bg-lightHover dark:hover:bg-darkHover hover:text-gray-500 dark:hover:text-gray-300'
                                }`}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#about" 
                                onClick={(e) => handleNavClick(e, 'about')}
                                className={`block px-4 py-2 rounded-lg transition ${
                                    activeSection === 'about' 
                                        ? 'bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white shadow-md' 
                                        : 'hover:bg-lightHover dark:hover:bg-darkHover hover:text-gray-500 dark:hover:text-gray-300'
                                }`}
                            >
                                About me
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#skills" 
                                onClick={(e) => handleNavClick(e, 'skills')}
                                className={`block px-4 py-2 rounded-lg transition ${
                                    activeSection === 'skills' 
                                        ? 'bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white shadow-md' 
                                        : 'hover:bg-lightHover dark:hover:bg-darkHover hover:text-gray-500 dark:hover:text-gray-300'
                                }`}
                            >
                                Skills
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#work" 
                                onClick={(e) => handleNavClick(e, 'work')}
                                className={`block px-4 py-2 rounded-lg transition ${
                                    activeSection === 'work' 
                                        ? 'bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white shadow-md' 
                                        : 'hover:bg-lightHover dark:hover:bg-darkHover hover:text-gray-500 dark:hover:text-gray-300'
                                }`}
                            >
                                My Work
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#experience" 
                                onClick={(e) => handleNavClick(e, 'experience')}
                                className={`block px-4 py-2 rounded-lg transition ${
                                    activeSection === 'experience' 
                                        ? 'bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white shadow-md' 
                                        : 'hover:bg-lightHover dark:hover:bg-darkHover hover:text-gray-500 dark:hover:text-gray-300'
                                }`}
                            >
                                Experience
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#contact" 
                                onClick={(e) => handleNavClick(e, 'contact')}
                                className={`block px-4 py-2 rounded-lg transition ${
                                    activeSection === 'contact' 
                                        ? 'bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white shadow-md' 
                                        : 'hover:bg-lightHover dark:hover:bg-darkHover hover:text-gray-500 dark:hover:text-gray-300'
                                }`}
                            >
                                Contact me
                            </a>
                        </li>
                    </ul>

                    {/* Theme Toggle */}
                    <div className="mt-auto pt-6 border-t border-gray-200 dark:border-white/10">
                        <button 
                            onClick={toggleTheme}
                            className="w-full px-4 py-2 rounded-lg hover:bg-lightHover dark:hover:bg-darkHover flex items-center gap-3 transition"
                        >
                            <img src="/assets/moon_icon.png" alt="Theme" className="w-5 dark:hidden" />
                            <img src="/assets/sun_icon.png" alt="Theme" className="w-5 hidden dark:block" />
                            <span className="font-Ovo">Toggle Theme</span>
                        </button>
                    </div>
                </div>

                {/* Close button for mobile */}
                {isOpen && (
                    <button 
                        onClick={closeMenu}
                        className="absolute top-4 right-4 md:hidden p-2 rounded-lg hover:bg-lightHover dark:hover:bg-darkHover"
                    >
                        <img src="/assets/close-black.png" alt="Close" className="w-5 dark:hidden" />
                        <img src="/assets/close-white.png" alt="Close" className="w-5 hidden dark:block" />
                    </button>
                )}
            </nav>

            {/* Overlay for mobile */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-30 md:hidden"
                    onClick={closeMenu}
                />
            )}
        </>
    )
}