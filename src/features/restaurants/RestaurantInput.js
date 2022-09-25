import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { restaurantAdded } from "./restaurantsSlice";

function RestaurantInput() {
	const [restaurant, setRestaurant] = useState("");
	const dispatch = useDispatch();

	function handleChange(event) {
		setRestaurant(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		dispatch(restaurantAdded(restaurant));
		setRestaurant("");
	}


  return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					Name
					<input
						type="text"
						name="name"
						value={restaurant.name}
						onChange={handleChange}
					/>
				</label>
				<input type="submit" value="Add Restaurant" />
			</form>
		</div>
	); 
}

export default RestaurantInput;
