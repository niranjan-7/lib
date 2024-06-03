import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

interface User {
  name: string;
  collegeName: string;
  email: string;
  password: string;
}

function App() {
  const [userData, setUserData] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<User>('http://localhost:3000/users'); // Assuming you're fetching user with ID 1
        setUserData(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error.response?.data || error.message);
        } else {
          setError('Unknown error occurred');
        }
        console.error('Error fetching user data:', error);
      }
    }

    fetchData();
    console.log(userData)
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {error && <p className="error">Error: {error}</p>}
        {userData && (
          <div className="user-data">
            <p>Name: {userData.name}</p>
            <p>College Name: {userData.collegeName}</p>
            <p>Email: {userData.email}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
