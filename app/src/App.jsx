import './App.css';
import { useState, useEffect } from 'react'; 
import React from 'react';

//646993ce

const API_URL = 'https://www.omdbapi.com/?apikey=646993ce';

const App = () => {
  const searchMovies = async (title) => {
  const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
  }
  useEffect(() => {
    searchMovies('avengers');
  }
}
export default App;