import { useState } from "react";

// In AddCity.jsx
const AddTheatre = () => {
    // In AddTheatre.jsx
    const[theatre , setTheatre] = useState({
        name:'',
        address:'',
        cityId : ''
    });

    


    return (
        <div className="container mt-5">
            <h3>Add Theatre</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Theatre Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={theatre.name} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" name="address" value={theatre.address} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="city" className="form-label">City</label>
                    <select className="form-select" id="city" name="city" value={theatre.city} onChange={handleInputChange}>
                        <option value="">Select a city</option>
                        {cities.map(city => (
                            <option key={city.id} value={city.id}>{city.name}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
};

export default AddTheatre;