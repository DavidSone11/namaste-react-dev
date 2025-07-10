import React from "react";
// import resLogo from "../assets/resLogo.avif"
import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#F0F0F0",
};
function RestroCardComponent(props) {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <div className="restro-card" style={styleCard}>
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Ratings</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
}

export default RestroCardComponent;
