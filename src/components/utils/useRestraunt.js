import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from '../../constant';
const useRestraunt = (resId) => {

    const [restaurantInfo, setRestaurantInfo] = useState(null);
// Get data from api
// eslint-disable-next-line
    useEffect(() => {
        getRestaurantInfo();
    }, []);

    const getRestaurantInfo = async () => {
        const response  = await fetch(FETCH_MENU_URL + resId)
        .then( data => data.json())
        .catch(error => console.error(error));

        setRestaurantInfo(response?.data);
    }

    return restaurantInfo;
};

export default useRestraunt;