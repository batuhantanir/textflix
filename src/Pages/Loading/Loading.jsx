import React from "react";

import { PacmanLoader } from "react-spinners";

const Loading = () => {

  return (
    <div style={{ height: "100vh" }}>
      <PacmanLoader
        color={"black"}
        loading={true}
        cssOverride={{
          display: "block",
          border: "#fff",
          margin: "50px auto",
          textAlign: "center",
        }}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
