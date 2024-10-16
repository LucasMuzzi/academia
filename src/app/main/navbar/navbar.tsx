import "@/src/app/main/navbar/navbar.css";

import Image from "next/image"; 

const Navbar: React.FC = () => {
  return (
    <>
      <div className="mainDiv">
        <div className="logo-section">
        <Image
          src="/images/logo.png" 
          alt="RyanGracieSBO"
          width={70} 
          height={70} 
        />
        <h1>Ryan Gracie SBO</h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
