import  Button  from "../ui/Button";
import  Card  from "../ui/Card";
import  CardContent  from "../ui/CardContent";
import ParkingSquareIcon from "../Icons/ParkingSquareIcon"

interface ParkingSpotProps {
  spotNumber: number;
  onClick?: (spotNumber:number) => void;
  bookedSpotNumber?: number [];
}


const ParkingSpot: React.FC<ParkingSpotProps> = ({ spotNumber, onClick, bookedSpotNumber }) => {
  const isBooked = bookedSpotNumber?.includes(spotNumber);
  return (
    <Card className={`relative ${isBooked}`}>
      {isBooked && (
        <span className="absolute top-0 right-0 p-1 text-xs text-white bg-red-600 rounded-bl">Not Available</span>
      )}
      <CardContent className="flex flex-col items-center justify-center space-y-2">
        <ParkingSquareIcon className="w-16 h-16 text-gray-800" />
        <h3 className="text-xl font-medium text-gray-800">Spot {spotNumber}</h3>
        <Button onClick={() => onClick && onClick(spotNumber)} disabled={isBooked}>Book Now</Button>
      </CardContent>
    </Card>
  );
}

export default ParkingSpot;