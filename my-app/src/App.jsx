import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PollOption from './PollOption';

function App() {
  const [count, setCount] = useState(0)
  const MyButton = () => {
    return (<><button onClick={Greet}>Click Me</button></>);
  }
  const Greet = () => {alert ('Hi Miss Satouri!')}
  
  const App = () => {
    const [pets, setPets] = usesStates([
      {option: 'Dog', count:0},
      {otion: 'Cat', count: 0},
      {option: 'Birds', count: 0}
    ])
  };

  const handleVote = (index) => {
    const updatedPets = [...pets];
    updatedPets [index].count += 1;
    setPets(updatedPets);
  }; 

  const getLeader = () => {
    const leader = pets.reduced ((max,pet) => pet.count > max.count ? pet : max, pets[0]);
    return leader.option;
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <MyButton/>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        
        <h1>Vote for the cutest pet!</h1>
        {pets.map((pet, index)=> (
          <PollOption
          key ={index}
          label = {pet.option}
          count = {pet.count}
          onVote = {() => handleVote(index)}
          />
        ))}
        <h2>Current Leader: {getLeader()}</h2>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
