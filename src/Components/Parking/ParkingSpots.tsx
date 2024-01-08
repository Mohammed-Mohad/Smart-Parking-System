import ParkingSpot from "./ParkingSpot";

interface SpotProps {
  children?: React.ReactNode;
  spots: { id: number; spotNumber: number }[];
  onClick?: (spotNumber: number) => void;
  bookedSpotNumber?: number[];
}

// ParkingSpots.tsx
const ParkingSpots = ({ spots, onClick, bookedSpotNumber }: SpotProps) => {
  return (
    <section className="flex flex-col items-center justify-center w-full p-6 space-y-6">
      <>
        <h2 className="text-3xl font-bold text-gray-800 mt-3">
          Available Parking Spots
        </h2>
        <div className="grid grid-cols-3 gap-4 w-full max-w-4xl">
          {spots.map((spot) => (
            <ParkingSpot
              key={spot.id}
              spotNumber={spot.spotNumber}
              onClick={onClick}
              bookedSpotNumber={bookedSpotNumber}
            />
          ))}
        </div>
      </>
    </section>
  );
};
export default ParkingSpots;
