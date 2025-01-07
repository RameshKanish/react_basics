import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';  // Hook to navigate programmatically
import axios from 'axios';

const AddMovie = () => {
  const [movieName, setMovieName] = useState('');
  const [genre, setGenre] = useState('');
  const navigate = useNavigate(); // React Router's navigate function to programmatically navigate

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form submission

    const data = {
      movieName: movieName,
      genre: genre,
    };

    try {
      const response = await axios.post('http://localhost:8080/movie/create', data);

      if (response.data.responseStatus === 'SUCCESS') {
        navigate('/'); 
      } else {
        console.log(response.data);
      }
    } catch (error) {
      console.error('Error adding movie:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h3>Add Movie</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Movie Name</Form.Label>
          <Form.Control
            type="text"
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
            placeholder="Enter Movie Name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Genre</Form.Label>
          <Form.Control
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            placeholder="Enter Genre"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Movie
        </Button>
      </Form>
    </div>
  );
};

export default AddMovie;
