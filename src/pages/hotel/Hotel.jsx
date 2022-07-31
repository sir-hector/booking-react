import React, {useState} from 'react'
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import useFetch from '../../hooks/useFetch';
import './hotel.css'
import { useLocation } from 'react-router-dom';

const Hotel = () => {
  const location = useLocation();
  const id = (location.pathname.split("/")[2])
  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)
  

  const {data, loading, error} = useFetch(`http://localhost:8800/api/hotels/find/${id}`)

  const photos = [
    {
      src: "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/298718901.jpg?k=2a55cf2d19497448f727024de2abc1d80889262102344f2752c1f407ab26b054&o=&hp=1"
    },
    {
      src: "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/298718901.jpg?k=2a55cf2d19497448f727024de2abc1d80889262102344f2752c1f407ab26b054&o=&hp=1"
    },
    {
      src: "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="
    },
    {
      src: "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="
    },
    {
      src: "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="
    },
    {
      src: "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="
    },
  ]

  const defaultImageUrl = "https://cf.bstatic.com/xdata/images/hotel/max1024x768/254095365.jpg?k=3825cad66905c879e6610389d21511c35c65aaf1324dc09651c95817015ce774&o=&hp=1"


  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true)
  }

  const handleMove = (direction) => {
    let newSlideNumber;

    if(direction==='l'){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1
    }
    if(direction==='r'){
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1
    }

    setSlideNumber(newSlideNumber);
  }
  return (
    <div>
      <Navbar />
      <Header type='list' />
      {loading ? "loading" : (<><div className="hotelContainer">
        {open && <div className='slider'>
            <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove('l')}/>
              <div className="sliderWrapper">
                <img src={data.photos[slideNumber].src} alt="" className="sliderImg" />
              </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove('r')}/>
          </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">{data.name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{data.address}</span>
          </div>
          <span className="hotelDistance">Excellent location- {data.distance}m from center</span>
          <span className="hotelPriceHighlight">Book a stay over {data.cheapestPrice} at this property and get a free airport taxi</span>
          <div className="hotelImages">
            {data.photos?.map((photo,id) => (
              <div className="hotelImgWrapper" key={id}>
                <img onClick={()=>handleOpen(id)} src={photo} className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">{data.title}</h1>
              <p className="hotelDesc">
              {data.desc}
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>Located in the real heart of Krakow</span>
              <h2>
                <b>$945</b> (9Nights)
              </h2>
              <button>Reserve or book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div></>)}
    </div>
  )
}

export default Hotel