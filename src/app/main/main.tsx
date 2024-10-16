"use client";

import Loading from "@/src/page/loading";
import { Layout } from "antd";
import { useEffect, useState } from "react";
import Navbar from "./navbar/navbar";
import { Content } from "antd/es/layout/layout";
import Home from "@/src/page/home/home";
import Footer from "./footer/footer";

const Main: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [currentContent, setCurrentContent] = useState<JSX.Element | null>(
    <Home />
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleLinkClick = (component: JSX.Element) => {
    setCurrentContent(component);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Loading loading={loading} />
      {!loading && (
        <>
          <Navbar onLinkClick={handleLinkClick} />

          <Content style={{ marginTop: "3.5rem", padding: "8px" }}>
            {currentContent}
          </Content>

          <Footer />
        </>
      )}
    </Layout>
  );
};

export default Main;
