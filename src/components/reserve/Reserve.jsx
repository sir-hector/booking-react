import React, {useContext, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import './reserve.css'
import useFetch from '../../hooks/useFetch'
import { SearchContext } from '../../context/SearchContext'

const Reserve = ({ setOpen, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([])
  const { data, loading, error } = useFetch(`http://localhost:8800/api/hotels/room/${hotelId}`)
  const {date} = useContext(SearchContext)

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate)
    const end = new Date(endDate)
    const date = new Date(start.getTime());
    let list = []
    while(date <= end){
      list.push(new Date(date).getTime())
      date.setDate(date.getDate()+1)
    }
    return list
  }
  const allDates = getDatesInRange(date[0].startDate, date[0].endDate)
  console.log("")

  const isAvaiable = (roomNumber) => {
    const isFound = roomNumber.unavaiableDates.some(date => allDates.includes(new Date(date).getTime()));

    return !isFound;
  }
  const handleSelect = (e) => {
    const checked = e.target.checked
    const value = e.target.value;
    setSelectedRooms(checked ? [...selectedRooms, value] : selectedRooms.filter(item=> item !==value))
  }
  const handleClick = () => {

  }
  return (
    <div className='reserve'>
      <div className="rContainer">
        <FontAwesomeIcon icon={faCircleXmark} className="rClose" onClick={() => setOpen(false)} />
        <span>Select your rooms:</span>
        {data.map(item => (
          <div className="rItem">
            <div className="rItemInfo">
              <div className="rTitle">{item.title}</div>
              <div className="rDesc">{item.desc}</div>
              <div className="rMax">Max people: <b>{item.maxPeople}</b></div>
              <div className="rPrice"><b>{item.price}</b></div>
            </div>
            {item.roomNumbers.map(roomNumber => (
              <div className="room">
                <label>{roomNumber.number}</label>
                <input type="checkbox" value={roomNumber._id} onChange={handleSelect} disabled={!isAvaiable(roomNumber)}/>
              </div>
            ))}
          </div>
        ))}
        <button onClick={handleClick} className='rButton'>Reserve Now!</button>
      </div>
    </div>
  )
}

export default Reserve