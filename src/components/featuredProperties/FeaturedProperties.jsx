import React from 'react'
import './featuredProperties.css'
import useFetch from '../../hooks/useFetch'

const FeaturedProperties = () => {
    const { data, loading, error } = useFetch("http://localhost:8800/api/hotels?featured=true&limit=4")

    const defaultImageUrl = "https://cf.bstatic.com/xdata/images/hotel/max1024x768/254095365.jpg?k=3825cad66905c879e6610389d21511c35c65aaf1324dc09651c95817015ce774&o=&hp=1"

    return (
        <div className='fp'>
            {loading ? "Loading" : (
                <>
                    {data.map(item => (
                        <div className="fpItem" key={item._id} >
                            <img src={item.photos.length > 0 ? item.photos[0] : defaultImageUrl} alt="" className="fpImg" />
                            <span className="fpName">{item.name}</span>
                            <span className="fpCity">{item.city}</span>
                            <span className="fpPrice">Starting from {item.cheapestPrice}$</span>
                            {item.rating &&
                                <div className="fpRating">
                                    <button>{item.rating}</button>
                                    <span>Excellent</span>
                                </div>
                            }
                        </div>
                    ))}
                </>)}
        </div>
    )
}

export default FeaturedProperties