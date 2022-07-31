import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import format from 'date-fns/format'
import './list.css'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/searchItem/SearchItem'
import useFetch from '../../hooks/useFetch'

const List = () => {

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [options, setOptions] = useState(location.state.options)

  const {data, loading, error, refech} = useFetch(`http://localhost:8800/api/hotels?city=${destination}`)

  const [openDate, setOpenDate] = useState(false)
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="searchTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="lsItem">
              <label>Check-in date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")} `}
              </span>
              {openDate && <DateRange
                onChange={item => setDate([item.selection])}
                minDate={new Date()}
                ranges={date}
              />}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className='lsOptionText'>Min price <small>per night</small></span>
                  <input type="number" className='lsOptionInput' />
                </div>
                <div className="lsOptionItem">
                  <span className='lsOptionText'>Max price <small>per night</small></span>
                  <input type="number" className='lsOptionInput' />
                </div>
                <div className="lsOptionItem">
                  <span className='lsOptionText'>Adults </span>
                  <input type="number" min={1} className='lsOptionInput' placeholder={options.adults} />
                </div>
                <div className="lsOptionItem">
                  <span className='lsOptionText'>Children </span>
                  <input type="number" min={0} className='lsOptionInput' placeholder={options.children} />
                </div>
                <div className="lsOptionItem">
                  <span className='lsOptionText'>Room</span>
                  <input type="number" min={1} className='lsOptionInput' placeholder={options.room} />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            {loading ? "loading" : <>
                {data.map(item=> (
                  <SearchItem key={item._id} item={item}/>
                ))}
            </>}
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default List