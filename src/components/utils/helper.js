export function filterData(searchText, restaurants){
    const filteredRestaurant = restaurants.filter(restaurant => {
        return restaurant.data.name.toLowerCase().includes(searchText.toLowerCase()) || restaurant.data.cuisines.join(" ").toLowerCase().includes(searchText.toLowerCase());
    });
    return filteredRestaurant;
}
