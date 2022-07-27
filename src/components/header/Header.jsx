import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'

const Header = () => {
    return (
        <div className='header'>
            <div className="headerContainer">

                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faStar} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
                <p className="headerDescription">
                    Get rewarded for your travels - unlock instant savings of 10%
                </p>
                <button className='headerBtn'>Sign in / Register</button>
                <div className="headerSearch">
                    
                </div>
            </div>
        </div>
    )
}

export default Header