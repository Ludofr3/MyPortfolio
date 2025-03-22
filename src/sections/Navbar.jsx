import React, { useState } from 'react';
import { navLinks } from '../constants/index.js';
import { color } from 'three/tsl';

const NavItems = ({ setCurrentSection }) => {
    return (
        <ul className="nav-ul">
            {navLinks.map(({ id, href, name }) => (
                <li key={id} className="nav-li">
                    <a href={href} className="nav-li_a"
                        onClick={() => { setCurrentSection(href) }}
                        style={{ color: 'rgb(255, 133, 27)' }}>
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    )
}

const Navbar = ({ setCurrentSection }) => {
    const [isOpen, setISOpen] = useState(false);

    const tooglMenu = () => setISOpen((prevIsOpen) => !prevIsOpen);
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between items-center py-5 mx-auto c-space">
                    <a href="/"
                        className="text-neutral-400 font-blod text-xl hover:text-white transition-colors">
                        <img src="/assets/Logo.png" alt="Logo" style={{ height: '40px' }} />
                    </a>
                    <button onClick={tooglMenu}
                        className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
                        aria-label="Toogle Menu">
                        <img src={isOpen ? "assets/tools/close.svg" : "assets/tools/menu.svg"}
                            alt="toggle"
                            className="w-6 h-6" />
                    </button>
                    <nav className="sm:flex hidden">
                        <NavItems setCurrentSection={setCurrentSection} />
                    </nav>
                </div>
            </div>
            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-5">
                    <NavItems setCurrentSection={setCurrentSection} />
                </nav>
            </div>
        </header>
    )
}

export default Navbar