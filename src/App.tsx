import Header from "./Components/Header";
import ParkingSpots from "./Components/Parking/ParkingSpots";
import BookingTable from "./Components/Booking/BookingTable";
import  Section  from "./Components/Booking/Section";
import Heading from "./Components/Booking/Heading";
import {useState} from "react";

const App = () => {
  interface BookingData {
    id: number;
    spotNumber: number;
    bookingTime: string;
    status: string;
  }
  const [bookedSpotNumber, setBookedSpotNumber] = useState<number[]>([]);
  const [spotData,setSpotData] =useState([
    {
      id: 1,
      spotNumber: 1,
    },
    {
      id: 2,
      spotNumber: 2,
    },
    {
      id:3,
      spotNumber: 3,
    },
    {
      id:4,
      spotNumber: 4,
    },
    {
      id:5,
            spotNumber: 5,
    }
    
  ])

  const [bookingData, setBookingData] = useState<BookingData[]>([]);

  const handleClicked = (spotNumber: number) => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const twelveHourFormat = hours % 12 || 12;
    const formattedTime = `${twelveHourFormat}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;
    setBookingData(prevBookingData => [
      ...prevBookingData,
      {
        id: Math.random() + 10,
        spotNumber: spotNumber,
        bookingTime: formattedTime,
        status: "Booked"
      }
    ]);
    setBookedSpotNumber(prevBookedSpotNumbers => [...prevBookedSpotNumbers, spotNumber]);
  };  
   
  const cancelBooking = (id: number) => {
    const bookingToCancel = bookingData.find(booking => booking.id === id);
    if (!bookingToCancel) {
      return;
    }
  
    setBookingData(prevBookingData => prevBookingData.filter(booking => booking.id !== id));
    setBookedSpotNumber(prevBookedSpotNumber => prevBookedSpotNumber.filter(spotNumber => spotNumber !== bookingToCancel.spotNumber));
  };
  return (
    
  <div>

      <Header />
      <ParkingSpots spots = {spotData} onClick={handleClicked}   bookedSpotNumber={bookedSpotNumber}/>
      <Section>
      <Heading title="Your Bookings" />
      <BookingTable bookingData={bookingData} onCancel={cancelBooking} />
    </Section>
  </div>
    
  );
};

export default App;
