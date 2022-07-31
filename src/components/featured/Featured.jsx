import React from 'react'
import useFetch from '../../hooks/useFetch'
import './featured.css'

const Featured = () => {

    const { data, loading, error } = useFetch("http://localhost:8800/api/hotels/countByCity?cities=berlin,madrid,london")
    

    return (
        <div className='featured'>
            {loading ? "Loading please wait" : (
                <>
                    <div className="featuredItem">
                        <img className='featuredImg' src="https://cf.bstatic.com/xdata/images/city/540x270/653080.webp?k=389326fef4805a4bdb9aa6ea47fbd93de32f2eb0a54a1c31044e237284f52492&o=" alt="" />
                        <div className="featuredTitles">
                            <h1>Berlin</h1>
                            <h1>{data[0]} properties</h1>
                        </div>
                    </div>
                    <div className="featuredItem">
                        <img className='featuredImg' src="https://cf.bstatic.com/xdata/images/city/540x270/652923.webp?k=38c46c1be4120dd87755482ba1e719be391760be25977efbb6149691f0e861fb&o=" alt="" />
                        <div className="featuredTitles">
                            <h1>Madrid</h1>
                            <h1>{data[1]} properties</h1>
                        </div>
                    </div>
                    <div className="featuredItem">
                        <img className='featuredImg' src="https://cf.bstatic.com/xdata/images/city/540x270/653080.webp?k=389326fef4805a4bdb9aa6ea47fbd93de32f2eb0a54a1c31044e237284f52492&o=" alt="" />
                        <div className="featuredTitles">
                            <h1>London</h1>
                            <h1>{data[2]} properties</h1>
                        </div>
                    </div></>)}
        </div>
    )
}

export default Featured