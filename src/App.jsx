// src/App.jsx
import { useState } from "react";
import './App.css';

const App = () => {

  const [team , setTeam] = useState([]);
  const [money , setMoney] = useState(100);
  const [notEnoughMoney, setNotEnoughMoney] = useState(false);
  const [totalStrength , setTotalStrength] = useState(0);
  const [totalAgility , setTotalAgility] = useState(0);
  const [zombieFighters , setZombieFighters] = useState(
    [
      {
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://via.placeholder.com/150/92c952',
      },
      {
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://via.placeholder.com/150/771796',
      },
      {
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://via.placeholder.com/150/24f355',
      },
      {
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/d32776',
      },
      {
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://via.placeholder.com/150/1ee8a4',
      },
      {
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://via.placeholder.com/150/66b7d2',
      },
      {
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://via.placeholder.com/150/56acb2',
      },
      {
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://via.placeholder.com/150/8985dc',
      },
      {
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://via.placeholder.com/150/392537',
      },
      {
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/602b9e',
      },
    ]    
  )

  const handleAddFighter = (fighter) => {
    if(money >= fighter.price) {
      setTeam((prevTeam) => {
        const updatedTeam = [...prevTeam, fighter];
        handleTotalStats(updatedTeam);
        return updatedTeam;
      });
      setMoney(money - fighter.price);
      setNotEnoughMoney(false);
    } else {
      setNotEnoughMoney(true);
    }
  }

  const handleRemoveFighter = (index) => {
    setTeam((prevTeam) => {
      const updatedTeam = [...prevTeam];
      const fighterToRemove = updatedTeam[index];
      updatedTeam.splice(index, 1);
      setMoney(money + fighterToRemove.price);
      return updatedTeam;
    });
  };

  const handleTotalStats = (team) => {
    const strengthArray = team.map(fighter => fighter.strength);

    const initialStrength = 0;
    const sumWithInitialStr = strengthArray.reduce(
      (acumulator , currentValue) => acumulator + currentValue, initialStrength
    )
    setTotalStrength(sumWithInitialStr);

    const agilityArray = team.map(fighter => fighter.agility);

    const initialAgility = 0;
    const sumWithInitialAgi = agilityArray.reduce(
      (acumulator , currentValue) => acumulator + currentValue, initialAgility
    )
    setTotalAgility(sumWithInitialAgi);
  }

  return (
    <>
      <h2>Money: {money}</h2>
      {notEnoughMoney && (<h4 className="no-money">Not enough money to recruit this fighter!</h4>)}
      <ul>
        {zombieFighters.map((fighter , index) => (
          <li key={index}>
            <img src={fighter.img} alt={fighter.name} />
            <div>Name: {fighter.name}</div>
            <div>Price: {fighter.price}</div>
            <div>Strength: {fighter.strength}</div>
            <div>Agility: {fighter.agility}</div>
            <button onClick={()=> handleAddFighter(fighter)}>Add</button>
          </li>
        ))}
      </ul>
      <h2>Your team</h2>
      {team.length == 0 && (<h4>Pick some team members!</h4>)}
      <ul>
        {team.map((fighter , index) => (
          <li key={index}>
            <img src={fighter.img} alt={fighter.name} />
            <div>Name: {fighter.name}</div>
            <div>Price: {fighter.price}</div>
            <div>Strength: {fighter.strength}</div>
            <div>Agility: {fighter.agility}</div>
            <button onClick={()=> handleRemoveFighter(index)}>Remove</button>
          </li>
        ))}
      </ul>
      {team.length > 0 && (
        <div>
           <h2>Team stats</h2>
          <ul>
            <li>Strength: {totalStrength}</li>
            <li>Agility: {totalAgility}</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default App
