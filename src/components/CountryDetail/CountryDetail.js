import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const CountryDetail = () => {
    const {name} = useParams();
    const [countryDetail, setCountryDetail] = useState({});
    useEffect(()=>{
        fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(res=>res.json())
        .then(data => setCountryDetail(data[0]))
    }, [name])

    const {
        capital,
        region,
        subregion,
        population,
        flag
    } = countryDetail;

    const countryStyle = {
        width: "30%",
        padding: "10px",
        background: "#fec600",
        color: "#444",
        border: "1px solid #fff",
        margin: "20px"
    }
    
    return (
        <div style={countryStyle}>
          <img style={{width: "200px"}}src={flag} alt=""/>
          <p>Country Name: {name}</p>
          <p>Capital: {capital}</p>
          <p>Region: {region}</p>
          <p>Sub Region: {subregion}</p>
          <p>population: {population}</p>

          <Link to="/home">
            <button>Back to Home</button>
          </Link>
        </div>
    );
};

export default CountryDetail;