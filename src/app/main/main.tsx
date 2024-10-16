"use client";

import Loading from "@/src/page/loading";
import { Layout } from "antd";
import { useEffect, useState } from "react";
import Navbar from "./navbar/navbar";

const Main: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Loading loading={loading} />
      {!loading && (
        <>
          <div className="mainDiv">
            <Navbar />
          </div>
        </>
      )}
    </Layout>
  );
};
export default Main;
