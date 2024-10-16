/* eslint-disable react/no-unescaped-entities */
import { IoLogoWhatsapp } from "react-icons/io";
import "./footer.css";
import { FaFacebook, FaMapMarkerAlt } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-location">
        <div style={{ marginBottom: "0.3rem" }}>
          <strong>Localização: </strong>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          Endereço: Piso 2, R. Quinze de Novembro, 935 - Centro, Santa Bárbara
          d'Oeste - SP
          <a
            href="https://www.google.com/maps/place/RYAN+GRACIE+SANTA+BÁRBARA+D'OESTE/@-22.7578368,-47.4147001,15z/data=!4m6!3m5!1s0x94c89db6075ffaff:0x341e9b9003159dd7!8m2!3d-22.7578368!4d-47.4147001!16s%2Fg%2F11b77b4j3w?entry=ttu&g_ep=EgoyMDI0MTAxMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fe007f", fontSize: "1.5rem" }}
          >
            <FaMapMarkerAlt style={{ fontSize: "1rem", color: "#f51a1b" }} />
          </a>
        </div>
      </div>
      <div className="footer-social">
        <div style={{ marginBottom: "0.3rem" }}>
          <strong>Redes sociais:</strong>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <a
            href="https://www.instagram.com/ryangraciesantabarbara/.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fe007f", fontSize: "1.5rem" }}
          >
            <RiInstagramFill />
          </a>{" "}
          |
          <a
            href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwi0ysiZnJOJAxVJuZUCHR4HDMoQFnoECD0QAQ&url=https%3A%2F%2Fwww.facebook.com%2Facademiaryangraciesantabarbara%2F&usg=AOvVaw2tStW7Quu05vmIAqfGtJaA&opi=89978449"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1f7bf2", fontSize: "1.5rem" }}
          >
            <FaFacebook />
          </a>{" "}
          |
          <a
            href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwi0ysiZnJOJAxVJuZUCHR4HDMoQFnoECD0QAQ&url=https%3A%2F%2Fwww.facebook.com%2Facademiaryangraciesantabarbara%2F&usg=AOvVaw2tStW7Quu05vmIAqfGtJaA&opi=89978449"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#2cd46b", fontSize: "1.5rem" }}
          >
            <IoLogoWhatsapp />
          </a>{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
