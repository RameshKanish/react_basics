import { useState, useEffect } from "react";
import { Card, Table, Button, Form } from "react-bootstrap";
import { API_BASE_URL } from './../../../config';
import axios from 'axios';

function Dashboard() {
    const [movies, setMovies] = useState([]);
    const [editMovieId, setEditMovieId] = useState(null); // Track which movie is being edited
    const [editedMovie, setEditedMovie] = useState({ name: '', genre: '' }); // Track the edited movie data

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/movie/getMovies`);
                setMovies(response.data);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };
        fetchMovies();
    }, []);

    const handleUpdateMovie = async (id, movie) => {
        try {
            console.log('Updating movie:', movie);
            let data = {
                movieName: movie.name,
                genre: movie.genre
            };
            const response = await axios.put(`${API_BASE_URL}/movie/${id}`, data);
            console.log(response);
            // After update, reset the state and refresh the movie list
            setEditMovieId(null);
            setMovies(movies.map(m => (m.id === id ? { ...m, ...movie } : m)));
        } catch (error) {
            console.error('Error updating movie:', error);
        }
    };

    const handleEditChange = (e) => {
        setEditedMovie({
            ...editedMovie,
            [e.target.name]: e.target.value,
        });
    };

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
                                <td>
                                    {editMovieId === movie.id ? (
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            value={editedMovie.name}
                                            onChange={handleEditChange}
                                            placeholder="Enter movie name"
                                        />
                                    ) : (
                                        movie.name
                                    )}
                                </td>
                                <td>
                                    {editMovieId === movie.id ? (
                                        <Form.Control
                                            type="text"
                                            name="genre"
                                            value={editedMovie.genre}
                                            readOnly
                                            onChange={handleEditChange}
                                            placeholder="Enter genre"
                                        />
                                    ) : (
                                        movie.genre
                                    )}
                                </td>
                                <td>
                                    {editMovieId === movie.id ? (
                                        <Button
                                            variant="success"
                                            size="sm"
                                            onClick={() => handleUpdateMovie(movie.id, editedMovie)}
                                        >
                                            Save
                                        </Button>
                                    ) : (
                                        <Button
                                            variant="info"
                                            size="sm"
                                            onClick={() => {
                                                setEditMovieId(movie.id);
                                                setEditedMovie({ name: movie.name, genre: movie.genre }); // Correctly set the state
                                            }}
                                        >
                                            Edit
                                        </Button>
                                    )}
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