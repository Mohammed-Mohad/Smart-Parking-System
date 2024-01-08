import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@windmill/react-ui";

interface BookingTableProps {
  children?: React.ReactNode;
  bookingData: {
    id: number;
    spotNumber: number;
    bookingTime: String;
    status: String;
  }[];
  onCancel:(id:number)=>void;
}

const BookingTable = ({ bookingData,onCancel }: BookingTableProps) => {
  return (
    bookingData.length > 0 && (

      <div className="w-full max-w-4xl">
          <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Parking Spot</TableCell>
            <TableCell>Booking Time</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookingData.map((data) => (
            <TableRow key={data.id} className="dark:text-gray-500">
              <TableCell>Spot {data.spotNumber}</TableCell>
              <TableCell>{data.bookingTime}</TableCell>
              <TableCell>Booked</TableCell>
              <TableCell>
                <Button size="small" className="text-black" onClick={() => onCancel?.(data.id)}>
                  Cancel 
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
    )

    
  );
};

export default BookingTable;
