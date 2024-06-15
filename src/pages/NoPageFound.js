import React from "react";
import { useLocation } from "react-router-dom";

function NoPageFound() {
  const location = useLocation();
  const address = location.pathname.substring(1);

  return (
    <div>
      <h1 className="wrongPageBackground">
        Sorry, the page&nbsp;<em>{address}</em>&nbsp;does not exist.
      </h1>
    </div>
  );
}

export default NoPageFound;
