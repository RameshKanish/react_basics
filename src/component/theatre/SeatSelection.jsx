import { useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';

const SeatSelection = () => {
    // Sample seat data: Assume this is fetched from an API
    const seatData = [
        
        { id: 1, row: 'A', col: 1, status: 'available' },
        { id: 2, row: 'A', col: 2, status: 'occupied' },
        { id: 3, row: 'A', col: 3, status: 'available' },
        { id: 4, row: 'B', col: 1, status: 'occupied' },
        { id: 5, row: 'B', col: 2, status: 'available' },
        { id: 6, row: 'B', col: 2, status: 'available' },
        { id: 7, row: 'C', col: 2, status: 'available' },
        { id: 8, row: 'C', col: 2, status: 'available' },
        { id: 9, row: 'C', col: 2, status: 'available' },
        { id: 10, row: 'D', col: 2, status: 'occupied' },
        { id: 11, row: 'D', col: 2, status: 'available' },
        { id: 12, row: 'D', col: 2, status: 'available' },
        { id: 13, row: 'E', col: 2, status: 'available' },
        { id: 14, row: 'E', col: 2, status: 'available' },
        { id: 15, row: 'E', col: 2, status: 'occupied' },
        { id: 16, row: 'F', col: 2, status: 'occupied' },
        { id: 17, row: 'F', col: 2, status: 'available' },
        { id: 18, row: 'I', col: 2, status: 'available' },
        { id: 19, row: 'I', col: 2, status: 'available' },
        { id: 20, row: 'I', col: 2, status: 'available' },
        { id: 21, row: 'J', col: 2, status: 'available' },
        { id: 22, row: 'J', col: 2, status: 'available' },
        { id: 23, row: 'J', col: 2, status: 'available' },
        { id: 24, row: 'K', col: 2, status: 'available' },
        { id: 25, row: 'K', col: 2, status: 'available' },
        { id: 26, row: 'K', col: 2, status: 'available' },
        { id: 27, row: 'K', col: 2, status: 'available' },
        { id: 28, row: 'K', col: 2, status: 'available' },
        { id: 29, row: 'L', col: 2, status: 'available' },
        { id: 30, row: 'L', col: 2, status: 'available' },
        { id: 31, row: 'L', col: 2, status: 'available' },
        { id: 32, row: 'M', col: 2, status: 'available' },
        { id: 33, row: 'M', col: 2, status: 'available' },

        // Add more seat data as necessary
    ];

    // State to keep track of selected seats
    const [selectedSeats, setSelectedSeats] = useState([]);

    // Function to handle seat selection
    const handleSeatSelect = (seatId) => {
        if (selectedSeats.includes(seatId)) {
            setSelectedSeats(selectedSeats.filter((id) => id !== seatId));  // Deselect seat
        } else {
            setSelectedSeats([...selectedSeats, seatId]);  // Select seat
        }
    };

    return (
        <div className="container mt-5">
            <h3>Select Seats</h3>

            {/* Render Seat Grid */}
            <Row>
                {seatData.map((seat) => (
                    <Col xs={1} md={2} lg={1} key={seat.id} className="mb-3">
                        <Button
                            variant={seat.status === 'occupied' ? 'danger' : selectedSeats.includes(seat.id) ? 'success' : 'primary'}
                            disabled={seat.status === 'occupied'}
                            onClick={() => handleSeatSelect(seat.id)}
                            style={{
                                width: '50px',
                                height: '50px',
                                margin: '5px',
                            }}
                        >
                            {seat.row}{seat.col}
                        </Button>
                    </Col>
                ))}
            </Row>

            {/* Display the selected seats */}
            <div className="mt-3">
                <h4>Selected Seats</h4>
                {selectedSeats.length > 0 ? (
                    <ul>
                        {selectedSeats.map((seatId) => {
                            const seat = seatData.find((s) => s.id === seatId);
                            return (
                                <li key={seatId}>
                                    Seat {seat.row}{seat.col}
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    <p>No seats selected</p>
                )}
            </div>
        </div>
    );
};
export default SeatSelection;