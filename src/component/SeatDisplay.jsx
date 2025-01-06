// // SeatDisplay.jsx
// import  { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import './../seatDisplay.css';  // Import the CSS here

// function SeatDisplay() {
//     const { screenId } = useParams();
//     const [seats, setSeats] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         // Fetch the seats from the API
//         axios.get(`http://localhost:8080/screen/${screenId}`)
//             .then(response => {
//                 setSeats(response.data);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 console.error("Error fetching seats", error);
//                 setLoading(false);
//             });
//     }, [screenId]);

//     if (loading) {
//         return <div>Loading seats...</div>;
//     }

//     return (
//         <div>
//             <h2>Seats for Screen {screenId}</h2>
//             <div className="seat-layout">
//                 {seats.map(seat => (
//                     <div key={seat.id} className={`seat ${seat.seatType.toLowerCase()}`}>
//                         {seat.name}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default SeatDisplay;

// src/components/SeatDisplay.js
import  { useState, useEffect } from 'react';
// import Seat from './Seat';  // Import the Seat component

function SeatDisplay({ screenId }) {
    const [seats, setSeats] = useState([]);

    // Sample seat data - you can fetch this data from a backend API
    useEffect(() => {
        const fetchedSeats = [
            { id: 1, type: 'regular', isBooked: false },
            { id: 2, type: 'regular', isBooked: false },
            { id: 3, type: 'premium', isBooked: false },
            { id: 4, type: 'vip', isBooked: false },
            { id: 5, type: 'regular', isBooked: true }, // Sample booked seat
        ];
        setSeats(fetchedSeats);
    }, [screenId]);

    // Function to toggle booking state


    return (
        <div className="seat-layout">
            <h1>Screen</h1>
        </div>
    );
}
export default SeatDisplay;