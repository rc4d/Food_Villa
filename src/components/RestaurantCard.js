const RestaurantCard = ({data}) => {
    // console.log(data);
    const {name, cuisines, avgRating, lastMileTravelString, cloudinaryImageId} = data;
    const url = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId;
    return (
        <div className="card">
            <img src={url} />
            <h2 className="name">{name}</h2>
            <h3 className="cuisines">{cuisines.join(", ")}</h3>
            <h4 className="ratingAndDistance">{avgRating} ⭐{"  "+lastMileTravelString} from 🏠</h4>
        </div>
    )
}


export default RestaurantCard;