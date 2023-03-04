
const Shimmer = () => {
    return (
        <div className='restaurant-list' style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
            🎶
            
            {Array(20).fill("").map((e, i) => <div key={i} className="shimmer-card" style={
                {
                    width: "200px",
                    height: "200px",
                    background: "lightgrey",
                    margin: "20px"
                }
            }></div>)}
        </div>
    )
}

export default Shimmer;