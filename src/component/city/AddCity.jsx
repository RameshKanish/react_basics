import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from './../../../config';


const AddCity = () => {
    const [city, setCity] = useState('');
    const [states, setStates] = useState([]); // To store states data

    const navigate = useNavigate();

    useEffect(() => {
        const fetchState = async () => {
            try {
                const response = await axios.get('https://countriesnow.space/api/v0.1/countries/states', {
                    params: {
                        country: 'India',
                    },
                });

                // Extract states from the response
                const indiaStates = response.data.data?.find(country => country.name === 'India')?.states || [];
                setStates(indiaStates); // Set the states list to the state
            } catch (error) {
                console.error('Error fetching states:', error);
            }
        };
        fetchState();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            name: city,
        };

        console.log("API_BASE_URL" , API_BASE_URL);

        const response = await axios.post(`${API_BASE_URL}/city`, data);

        if(response.data.id){
            navigate('/city');
        }
        console.log(response);
    };

    return (
        <div className='container mt-5'>
            <h3>Add City</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Select State</Form.Label>
                    <Form.Control
                        as="select" // This makes the control a dropdown
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    >
                        <option value="">Select a state</option> {/* Default option */}
                        {states.map((state, index) => (
                            <option key={index} value={state.name}>{state.name}</option> // Access `name` or relevant string value
                        ))}
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add City
                </Button>
            </Form>
        </div>
    );
};

export default AddCity;