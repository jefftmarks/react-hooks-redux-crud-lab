import React from "react";
import Restaurant from "./Restaurant";

function Restaurants({ restaurants }) {
  const restaurantList = restaurants.map((restaurant) => (
		<Restaurant key={restaurant.id} restaurant={restaurant} />
	))
	
	return <ul>{restaurantList}</ul>;
}

export default Restaurants;
