/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

const simpleForm = () =>{
    const [name , setName] = useState('');
    const [email , setEmail] = useState ('');
    const [password , setPassword] = useState ('');



    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {name ,email , password}
        fetch('http://localhost:8080/auth/signUp', {
            method : 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify(data) 
        })
        .then(response => console.log(response.json))
        .then(result => console.log("result",result))
        .catch(error => console.error("Error",error))
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name</label>
                <input 
                    type="text" 
                    id="name" 
                    value={name} // use of this is we give enitire permission to react to chaneg or save it (To update the value)
                    onChange={(event) => setName(event.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <label htmlFor="passWord">Password</label>
                <input
                    type="text"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <button type="submit" onClick={handleSubmit}>Submit </button>
        </form>
    )
}

export default simpleForm;