import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';

// z0I1OlumYdr0dG6YF/kRIQ==zbWilQS4KRKzSB3D

function App() {

axios({
  method: 'GET',
  url: 'https://api.api-ninjas.com/v1/exercises?',
  headers: { 'X-Api-Key': 'z0I1OlumYdr0dG6YF/kRIQ==zbWilQS4KRKzSB3D'},
  })
.then((response) => {
  console.log(response);
}, (error) => {
  console.log(error);
});




  return (
    <>

    </>
  );
}

export default App;
