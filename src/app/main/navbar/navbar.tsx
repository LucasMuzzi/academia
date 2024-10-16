import { useState } from "react";
import "@/src/app/main/navbar/navbar.css";
import About from "@/src/page/about/about";
import Contact from "@/src/page/contact/contact";
import Image from "next/image";
import Home from "@/src/page/home/home";
import { FaBars, FaTimes } from "react-icons/fa"; // Ícones de abrir/fechar o menu

interface NavbarProps {
  onLinkClick: (component: JSX.Element) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLinkClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { id: 1, name: "Home", conteudo: <Home /> },
    { id: 2, name: "Sobre", conteudo: <About /> },
    { id: 3, name: "Contato", conteudo: <Contact /> },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mainDiv">
      <div className="logo-section">
        <Image
          src="/images/logo.png"
          alt="RyanGracieSBO"
          width={50}
          height={50}
        />
        <h1>Ryan Gracie SBO</h1>
      </div>

      {/* Ícone do menu para mobile */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />} {/* Alterna o ícone */}
      </div>

      {/* Links da Navbar, visível dependendo do estado de isMenuOpen */}
      <div className={`link-section ${isMenuOpen ? "active" : ""}`}>
        <div className="links-container">
          {links.map((link) => (
            <div className="link-wrapper" key={link.id}>
              <a
                href="#"
                className="links"
                onClick={(e) => {
                  e.preventDefault();
                  onLinkClick(link.conteudo);
                  setIsMenuOpen(false); // Fecha o menu ao clicar em um link
                }}
              >
                {link.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
