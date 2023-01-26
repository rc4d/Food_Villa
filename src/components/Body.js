import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import  Shimmer  from "../Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "./utils/helper";
import useOnline from "./utils/useOnline";
import {RESTAURANT_LIST_API} from '../constant';

const Body = () => {

    const [allRestaurant, setAllRestaurant] = useState([]);
    const [restaurant, setRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() =>{
        getRestaurantList();
    }, []);

    const getRestaurantList = async () => {
        const response = await fetch(RESTAURANT_LIST_API)
                                .then((data) => data.json());
            setAllRestaurant(response?.data?.cards[2]?.data?.data?.cards);
            setRestaurant(response?.data?.cards[2]?.data?.data?.cards);

    }

    const online = useOnline();
    if(!online){
        return <h1>🔴 Offline, please check your internet connection!! </h1>;
    }


    
    if(!allRestaurant || !restaurant){
        return <Shimmer />;
    }
    return (restaurant.length === 0) ? <Shimmer /> : (
        <>
        <div className="search-container">
            <h2>Search for your favourite Food or Restaurant</h2>
            <div className="InputContainer"><input type="text" className="search-input" placeholder="It just can't be pizza..." value={searchText} onChange={(e) => setSearchText(e.target.value)} /></div>
            <button className="search-btn" 
                onClick={
                    // console.log(filterData(searchText,restaurantData)),
                    () => setRestaurant(filterData(searchText,allRestaurant))}
            >Search</button>
        </div>
        <div className="restaurant-cards">
            {
                restaurant.map((res) => {
                    return (
                        <Link  key={res.data.id} to={"/restaurant/"+res.data.id}><RestaurantCard data={res.data} /></Link>
                    );
                })
            }
        </div>
        </>
    )
}

export default Body;
