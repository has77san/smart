import React from "react";
import Sidebar from "./components/sidbar/Sidebar";
function Master({children}) {
  return (
    <div className="container">
      <Sidebar />
      <div className="container_main">
       {children}
      </div>
    </div>
  );
}

export default Master;
