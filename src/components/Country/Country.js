import React from 'react';
import { useHistory } from 'react-router-dom';

const Country = (props) => {
    
    const {name , region , capital} = props.country;
    let history = useHistory();
    const handleCLick = (id)=> {
        history.push(`/country/${id}`)
    }

    const contryStyle = {
        border: "1px solid gray",
        background: "gray",
        color: "#f8f8f8",
        margin: "10px",
        padding: "10px",
        width: "30%",
        float: "left",
        height: "220px"
    }

    return (
        <div style={contryStyle}>
            <p>Country Name: {name}</p>
            <p>Region: {region}</p>
            <p>Capital: {capital}</p>
            <button onClick={()=>handleCLick(name)}>Show Details</button>
        </div>
    );
};

export default Country;