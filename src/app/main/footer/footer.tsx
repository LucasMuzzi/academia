/* eslint-disable react/no-unescaped-entities */
import { IoLogoWhatsapp } from "react-icons/io";
import "./footer.css";
import { FaFacebook, FaMapMarkerAlt } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { useEffect, useState } from "react";

const Footer: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Verifica se a largura da tela é menor que 768px
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Verifica a largura inicial

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="footer">
      <div className="footer-content">
        <div
          className="footer-location"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {isMobile ? (
            <span
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              Endereço:{" "}
              <a
                href="https://www.google.com/maps/place/RYAN+GRACIE+SANTA+BÁRBARA+D'OESTE/@-22.7578368,-47.4147001,15z/data=!4m6!3m5!1s0x94c89db6075ffaff:0x341e9b9003159dd7!8m2!3d-22.7578368!4d-47.4147001!16s%2Fg%2F11b77b4j3w?entry=ttu&g_ep=EgoyMDI0MTAxMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#fe007f", fontSize: "1.5rem" }}
              >
                <FaMapMarkerAlt
                  style={{ fontSize: "1.5rem", color: "#f51a1b" }}
                />{" "}
              </a>
            </span>
          ) : (
            <span
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              Endereço: Piso 2, R. Quinze de Novembro, 935 - Centro, Santa
              Bárbara d'Oeste - SP, 13450-044
              <a
                href="https://www.google.com/maps/place/RYAN+GRACIE+SANTA+BÁRBARA+D'OESTE/@-22.7578368,-47.4147001,15z/data=!4m6!3m5!1s0x94c89db6075ffaff:0x341e9b9003159dd7!8m2!3d-22.7578368!4d-47.4147001!16s%2Fg%2F11b77b4j3w?entry=ttu&g_ep=EgoyMDI0MTAxMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#fe007f", fontSize: "1.5rem" }}
              >
                <FaMapMarkerAlt
                  style={{ fontSize: "1rem", color: "#f51a1b" }}
                />
              </a>
            </span>
          )}
        </div>
        <div
          className="footer-social"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
         
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <a
              href="https://www.instagram.com/ryangraciesantabarbara/.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fe007f", fontSize: "1.5rem" }}
            >
              <RiInstagramFill />
            </a>
            <a
              href="https://www.facebook.com/academiaryangraciesantabarbara/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1f7bf2", fontSize: "1.5rem" }}
            >
              <FaFacebook />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5519991259705"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#2cd46b", fontSize: "1.5rem" }}
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
