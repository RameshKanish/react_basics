import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { API_BASE_URL } from '../../../config';

const ListMovies = () => {
  const [movies, setMovies] = useState([]);

  // Fetch the movies list from the backend
  const fetchMovies = async () => {
    // const response = await axios.get('https://bookmyshow-backend-latest.onrender.com/movie/getMovies');
    const response = await axios.get(`${API_BASE_URL}/movie/getMovies`);
    setMovies(response.data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);  

// Delete movie by ID
  const handleDelete = async (id) => {
    try{
      console.log("API.........." , API_BASE_URL);
      
        // const reponse  = await axios.delete(`https://bookmyshow-backend-latest.onrender.com/movie/${id}`)
        const reponse  = await axios.delete(`${API_BASE_URL}/movie/${id}`)
        if(reponse){
            setMovies(movies.filter((movie) => movie.id !== id));
        }
    }catch(error){
        alert('Something went wrong while deleting the movie!');
        console.error('Error deleting movie:', error);
    }
  }
  return (
    <div className="container mt-5">
      <h3>Movies List</h3>
      <Button variant="primary" as={Link} to="/add-movie" className="mb-4">
        Add Movie
      </Button>

      <Row xs={1} md={2} lg={3} className="g-4">
        {movies.map((movie) => (
          <Col key={movie.id}>
            <Card>
              <Card.Body>
                <Card.Title>{movie.name}</Card.Title>
                <Card.Text>{movie.genre}</Card.Text>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(movie.id)} // Pass movie ID to delete
                  style={{ position: 'absolute', top: '10px', right: '10px' }} // Positioning the delete icon
                >
                  <FaTrash /> {/* Render the trash icon */}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default ListMovies;