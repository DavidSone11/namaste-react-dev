import React, { useState, useEffect } from "react";
import { Box, Button, Stack } from "@mui/material";
import SearchComponent from "./SearchComponent";
import RestCardComponent from "./RestCardComponent";
import resList from "../../utils/mockData";

function RestContainerComponent() {

  const[restListData, setRestListData] = useState([])

  useEffect(() => {
    setRestListData(resList)
  },[])

  useEffect(() => {
    fetchRestData();
  },[])

  const fetchRestData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const jsonData = await data.json();
    console.log("RestList API Data-->", jsonData)
  }

  const filterRestaurants = () => {
    const filteredList = resList.filter((rest) => {
      return rest.info.avgRating > 4;
    });
    setRestListData(filteredList);
    return filteredList;
  };
  

  return (
    <Box>
      <Button variant="contained" sx={{my:2}} onClick={filterRestaurants}>Top Rated Restaurants</Button>
      {/* <SearchComponent /> */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1.5, // spacing between cards
        //   justifyContent: "center",
        }}
      >
        {restListData.map((restData) => (
          <RestCardComponent key={restData.info.id} restData={restData} />
        ))}
      </Box>
    </Box>
  );
}

export default RestContainerComponent;
