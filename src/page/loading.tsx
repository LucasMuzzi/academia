"use client";

import { Spin } from "antd";

interface LoadingProps {
  loading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ loading }) => {
  if (!loading) {
    return null;
  }

  return (
    <div style={styles.loadingContainer}>
      <Spin size="large" />
    </div>
  );
};

const styles = {
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
};

export default Loading;
