import { useState } from "react";
import "@/src/app/main/navbar/navbar.css";
import Image from "next/image";
import Home from "@/src/page/home/home";
import { FaBars, FaTimes } from "react-icons/fa";
import Academia from "@/src/page/academia/academia";

interface NavbarProps {
  onLinkClick: (component: JSX.Element) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLinkClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { id: 1, name: "Home", conteudo: <Home /> },
    { id: 2, name: "Academia", conteudo: <Academia /> },
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
        {isMenuOpen ? <FaTimes /> : <FaBars />}
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
                  setIsMenuOpen(false);
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
