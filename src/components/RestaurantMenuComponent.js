import React, { useEffect } from "react";
function RestaurantMenuComponent() {
  useEffect(() => {
    fetchMenu();
  });

  const fetchMenu = async () => {
    const data = await fetch(
      "http://localhost:3000/city/hyderabad/mehfil-attapur-rambagh-colony-rest9277"
    );

    const json = await data.json();
    console.log("Restaurants Menu: ", json);
  };
  return (
    <div>
      <h1>Name Of The Restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
}

export default RestaurantMenuComponent;
