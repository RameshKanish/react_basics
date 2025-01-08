import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const CityList = () => {
    const navigate = useNavigate();
    const [cities, setCities] = useState([]); // Keep track of the list of cities

    // Fetch the list of cities when the component is mounted
    useEffect(() => {
        const fetchCity = async () => {
            try {
                const cityResponse = await axios.get(`${API_BASE_URL}/city`);
                console.log(cityResponse.data);
                setCities(cityResponse.data); // Set the cities in state
            } catch (error) {
                console.error("Error fetching cities:", error);
            }
        };
        fetchCity();
    }, []);

    // Redirect to the Add City page
    const handleAddCityClick = () => {
        navigate('/city'); // Replace this with your actual route to create city
    };

    return (
        <div className="container mt-5">
            <h3>City List</h3>

            {/* Button to navigate to Add City page */}
            <Button variant="primary" className="mb-4" onClick={handleAddCityClick}>
                Add City
            </Button>

            {/* Display the list of cities */}
            {cities.length > 0 ? (
                <ul>
                    {cities.map((city, index) => (
                        <li key={index}>{city.name}</li> // Adjust this field as per API response
                    ))}
                </ul>
            ) : (
                <p>No cities available.</p>
            )}
        </div>
    );
};

export default CityList;