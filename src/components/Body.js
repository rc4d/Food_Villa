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
    const handleInputKey = (e) => {
        if(e.key === "Enter"){
            setRestaurant(filterData(searchText,allRestaurant));
        }
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
        <h2 className="p-2 text-sm">Search for your favourite Food or Restaurant</h2>
        <div className="search-container flex p-2 bg-pink-600 my-50 text-white">
            <div className="InputContainer">
                <input type="text" 
                    className="search-input h-9 w-96 p-1 text-black focus-within:bg-red-100" 
                    placeholder="It just can't be pizza..." 
                    value={searchText} 
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={handleInputKey}
                 />
            </div>
            <button className="px-2 mx-2 bg-purple-900  rounded-md hover:bg-sky-700" 
                onClick={
                    () => setRestaurant(filterData(searchText,allRestaurant))}
            >Search</button>
        </div>
        <div className="restaurant-cards flex flex-wrap">
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
