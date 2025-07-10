import React, { useEffect, useState } from "react";
import RestroCardComponent from "./RestroCardComponent";
import ShimmerComponent from "./ShimmerComponent";

function BodyComponent() {
  const [listOfRestro, setListOfRestro] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState([]);

  console.log("Body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const jsonData = await response.json();
      console.log(jsonData);
      setListOfRestro(
        jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      console.log("List Of Restro: ", listOfRestro);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return listOfRestro.length === 0 ? (
    <ShimmerComponent />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurants = listOfRestro.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter-sec">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredResList = listOfRestro.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurants(filteredResList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="restro-container">
        {filteredRestaurants.map((restaurant) => (
          <RestroCardComponent key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default BodyComponent;
