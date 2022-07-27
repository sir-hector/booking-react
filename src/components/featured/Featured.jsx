import React from 'react'
import './featured.css'

const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img className='featuredImg' src="https://cf.bstatic.com/xdata/images/city/540x270/653080.webp?k=389326fef4805a4bdb9aa6ea47fbd93de32f2eb0a54a1c31044e237284f52492&o=" alt="" />
            <div className="featuredTitles">
                <h1>Warsaw</h1>
                <h1>123 properties</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img className='featuredImg' src="https://cf.bstatic.com/xdata/images/city/540x270/652923.webp?k=38c46c1be4120dd87755482ba1e719be391760be25977efbb6149691f0e861fb&o=" alt="" />
            <div className="featuredTitles">
                <h1>Gdansk</h1>
                <h1>123 properties</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img className='featuredImg' src="https://cf.bstatic.com/xdata/images/city/540x270/653080.webp?k=389326fef4805a4bdb9aa6ea47fbd93de32f2eb0a54a1c31044e237284f52492&o=" alt="" />
            <div className="featuredTitles">
                <h1>Krakow</h1>
                <h1>123 properties</h1>
            </div>
        </div>
    </div>
  )
}

export default Featured