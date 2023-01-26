
const Shimmer = () => {
    return (
        <div className='restaurant-list' style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
            {Array(20).fill("").map((e, i) => <div key={i} className="shimmer-card"></div>)}
        </div>
    )
}

export default Shimmer;