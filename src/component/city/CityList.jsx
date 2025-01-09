import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Row } from 'react-bootstrap';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const CityList = () => {
    const [cities, setCities] = useState([]); // Keep track of the list of cities

    useEffect(() => {
        const fetchCity = async () => {
            try {
                const cityResponse = await axios.get(`${API_BASE_URL}/city`);
                console.log(cityResponse);
                setCities(cityResponse.data); // Extract 'data' from the response
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        };
        fetchCity();
    }, []);

    return (
        <div className="container mt-5">
            <h3>City List</h3>
    
            { /* Display the list of cities */ }
            <Row xs={1} md={2} lg={3} className="g-4">
                {cities.length > 0 ? (
                    cities
                        .filter((value, index, self) => 
                            index === self.findIndex((t) => (
                                t.name === value.name // Use `id` or other unique identifier to filter duplicates
                            ))
                        )
                        .map((city) => {
                            return (
                                <Col key={city.id}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>{city.name}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })
                ) : (
                    <p>No Cities Found</p>
                )}
            </Row>
        </div>
    );    
};

export default CityList;