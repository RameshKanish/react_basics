import { useState , useEffect } from "react";

import { Card , Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { API_BASE_URL } from './../../../config';
import axios from 'axios';

function Dashboard () {
    const [movies , setMovies] = useState([]);
    useEffect(() => {
        const fetchMovies = async () => {
            try{
                const response = await axios.get(`${API_BASE_URL}/movie/getMovies`);
                setMovies(response.data);
            }catch(error){
                console.error('Error fetching movies:', error);
            }
        };
        fetchMovies();
    } , []);
    return (
        <div className="container mt-4">
            <h2>📽️ Movie Booking Dashboard</h2>

            <div className="row">
                {/* Movie Stats */}
                <div className="col-md-4">
                    <Card className="p-3 text-center">
                        <h4>Total Movies</h4>
                        <h2>{movies.length}</h2>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card className="p-3 text-center">
                        <h4>Total Revenue</h4>
                        <h2>₹0.00</h2>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card className="p-3 text-center">
                        <h4>Total Bookings</h4>
                        <h2>0</h2>
                    </Card>
                </div>
            </div>

            {/* Movie List */}
            <h3 className="mt-4">🎬 Your Added Movies</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Movie Name</th>
                        <th>Genre</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.length > 0 ? (
                        movies.map((movie, index) => (
                            <tr key={movie.id}>
                                <td>{index + 1}</td>
                                <td>{movie.name}</td>
                                <td>{movie.genre}</td>
                                <td>
                                    <Button variant="info" size="sm" as={Link} to={`/edit-movie/${movie.id}`}>
                                        Edit
                                    </Button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center">
                                No movies added yet.
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
}
export default Dashboard;