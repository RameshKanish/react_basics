/* eslint-disable react/prop-types */
const DisPlayData = (props) =>{

    const {fruits , person} = props;

    return(
       <div>
        <ul>
            {fruits.map((fruit , index) => (
               <li key={index}>{fruit}</li>
            ))}
        </ul>

         <h2>Person Details</h2>
         <p>Name  :   {person.name}</p>
         <p>age   :   {person.age}</p>
       </div>
    )
}

export default DisPlayData;