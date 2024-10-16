import "@/src/app/main/navbar/navbar.css";
import About from "@/src/page/about/about";
import Contact from "@/src/page/contact/contact";
import Image from "next/image";
import Home from "@/src/page/home/home";

interface NavbarProps {
  onLinkClick: (component: JSX.Element) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLinkClick }) => {
  const links = [
    { id: 1, name: "Home", conteudo: <Home /> },
    { id: 2, name: "Sobre", conteudo: <About /> },
    { id: 3, name: "Contato", conteudo: <Contact /> },
  ];

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
      <div className="link-section">
        <div className="links-container">
          {links.map((link) => (
            <div className="link-wrapper" key={link.id}>
              <a
                href="#"
                className="links"
                onClick={(e) => {
                  e.preventDefault(); // Previne a navegação padrão do link
                  onLinkClick(link.conteudo); // Chama a função para atualizar o conteúdo
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
