import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { reviewAdded } from "./reviewsSlice";

function ReviewInput({ restaurantId }) {
	const [review, setReview] = useState("");
	const dispatch = useDispatch();

	function handleChange(event) {
		setReview(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		dispatch(reviewAdded({
			comment: review,
			restaurantId: restaurantId
		}));
		setReview("");
	}

  return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					Comment
					<textarea
						name="comment"
						value={review.comment}
						onChange={handleChange}
					>
					</textarea>
				</label>
				<input type="submit" value="Add Review" />
			</form>
		</div>
	); 
}

export default ReviewInput;
