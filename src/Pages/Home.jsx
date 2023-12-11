import React from "react";
import RightComponent from "../Components/RightComponent";
import LeftComponent from "../Components/LeftComponent";
import "../Styles/Home.scss";

function Home() {
  return (
    <div className="homeMainWrapper">
      <div className="homeInnerOne">
        <RightComponent />
      </div>
      <div className="homeInnerTwo">
        <LeftComponent />
      </div>
    </div>
  );
}

export default Home;
