import React, { useState } from 'react';
import axios from 'axios';


const RegistrationForm =()=> {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [landMark, setLandMark] = useState('');
  const [country, setCountry] = useState('');
  const [error,setError]=useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:5000/register', {
        first_name: firstName,
        last_name: lastName,
        email,
        mobile_number: mobileNumber,
        address,
        postal_code: postalCode,
        city,
        land_mark: landMark,
        country,
      });
      
      alert("registered succesfully");
      setAddress("");
      setCity("");
      setCountry("");
      setEmail("");
      setFirstName("");
      setLandMark("");
      setLastName("");
      setMobileNumber("");
      setPostalCode("");

    } catch (error) {
      console.error(error);
      setError("All fields are required")
    }
  };

  return (
    <div className="register-form">
      <h1>Register User</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br />
        <label>
          Mobile Number:
          <input
            type="tel"
            value={mobileNumber}
            onChange={(event) => setMobileNumber(event.target.value)}
          maxLength={10}/>
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
        </label>
        <br />
        <label>
          Postal Code:
          <input
            type="number"
            value={postalCode}
            onChange={(event) => setPostalCode(event.target.value)}
          maxLength={6}/>
        </label>
        <br />
        <label>
          City:
          <input
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </label>
        <br />
        <label>
          Land Mark:
          <input
            type="text"
            value={landMark}
            onChange={(event) => setLandMark(event.target.value)}
          />
        </label>
        <br />
        <label>
          Country:
          <input
            type="text"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
      <span class="alert">{error && error}</span>
    </div>
  );
}

export default RegistrationForm;