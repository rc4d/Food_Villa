import React, { useState } from "react";
import { restaurantData } from '../constant';
import RestaurantCard from "./RestaurantCard";

function filterData(searchText, restaurants){
    const filteredRestaurant = restaurants.filter(restaurant => {
        return restaurant.data.name.toLowerCase().includes(searchText.toLowerCase());
    });
    console.log(filteredRestaurant);
    return filteredRestaurant;
}
const Body = () => {
    const [restaurant, setRestaurant] = useState(restaurantData);
    const [searchText, setSearchText] = useState("");
    return (
        <>
        <div className="search-container">
            <h2>Search for your favourite Restaurant</h2>
            <div class="InputContainer"><input type="text" className="search-input" placeholder="It just can't be pizza..." value={searchText} onChange={(e) => setSearchText(e.target.value)} /></div>
            <button className="search-btn" 
                onClick={
                    // console.log(filterData(searchText,restaurantData)),
                    () => setRestaurant(filterData(searchText,restaurantData))}
            >Search</button>
        </div>
        <div className="restaurant-cards">
            {
                restaurant.map((res) => {
                    return (
                        <RestaurantCard key={res.data.id} data={res.data} />
                    );
                })
            }
        </div>
        </>
    )
}

export default Body;