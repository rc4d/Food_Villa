import { IMG_CDN_URL } from "../constant";
const RestaurantCard = ({data}) => {
    
    const {name, cuisines, avgRating, lastMileTravelString, cloudinaryImageId, costForTwoString} = data;
    const url = IMG_CDN_URL + cloudinaryImageId;
    return (
        <div className="w-56 p-2 m-2 shadow-lg bg-pink-100">
            <img className="food-image" alt="Restaurant" src={url} />
            <h2 className="font-bold text-xl">{name}</h2>
            <h3 className="cuisines text-sm">{cuisines.join(", ")}</h3>
            <p className="cost">{costForTwoString}</p>
            <h4 className="ratingAndDistance">⭐ {avgRating} {" | "+lastMileTravelString} from 🏠</h4>
        </div>
    )
}


export default RestaurantCard;