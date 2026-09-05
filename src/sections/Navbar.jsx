import { useState } from 'react';
import { navLinks } from '../constants/index.js';
import { baseUrl } from '../config';
import PropTypes from 'prop-types';

const NavItems = ({ setCurrentSection, onNavigate }) => {
    return (
        <ul className="nav-ul">
            {navLinks.map(({ id, href, name }) => (
                <li key={id} className="nav-li">
                    <a href={href} className="nav-li_a"
                        onClick={() => { setCurrentSection(href); onNavigate?.(); }}
                        style={{ color: 'rgb(255, 133, 27)' }}>
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    )
}

NavItems.propTypes = {
    setCurrentSection: PropTypes.func.isRequired,
    onNavigate: PropTypes.func,
};

const Navbar = ({ setCurrentSection }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between py-5 mx-auto c-space">
                    <a href={baseUrl}
                        className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
                        onClick={(e) => {
                            e.preventDefault();
                            setCurrentSection('#Home');
                            closeMenu();
                        }}>
                        <img src={`${baseUrl}assets/Logo.png`} alt="Logo" style={{ height: '40px' }} />
                    </a>
                    <button onClick={toggleMenu}
                        className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
                        aria-label="Toggle Menu">
                        <img src={isOpen ? `${baseUrl}assets/tools/close.svg` : `${baseUrl}assets/tools/menu.svg`}
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
                    <NavItems setCurrentSection={setCurrentSection} onNavigate={closeMenu} />
                </nav>
            </div>
        </header>
    )
}

Navbar.propTypes = {
    setCurrentSection: PropTypes.func.isRequired,
};

export default Navbar
