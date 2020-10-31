import React from 'react';
import './App.css';
import data from './data.js';
import AnimalCard from '../AnimalCard/AnimalCard.js';

function showAdditional(additional){
  const alertInformation = Object.entries(additional)
    .map(information => `${information[0]}: ${information[1]}`)
    .join('\n');
  alert(alertInformation);
};

function App() {
  const greeting = "greeting";
  const displayAction = false;
  return(
    <div className="wrapper">
      <h1 id={greeting}>Animals</h1>
      {
        data.map(animal => (
          <AnimalCard 
            additional={animal.additional}
            diet={animal.diet}
            key={animal.name}
            name={animal.name}
            scientificName={animal.scientificName}
            showAdditional={showAdditional}
            size={animal.size}
          />
        ))
      }
    </div>
  )
}

export default App; 