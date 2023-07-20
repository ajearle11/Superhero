import { useEffect, useState } from "react";
import FightCard from "../../components/FightCard";

export default function Home() {
  const [superHeroLeftData, setsuperHeroLeftData] = useState({});
  const [superHeroRightData, setsuperHeroRightData] = useState({});
  const [unusableIDs, setUnusableIDs] = useState([]);
  const [winner, setWinner] = useState("");

  const grabRandomID = () => {
    const randomID = Math.random() * 731;
    const id = Math.ceil(randomID);
    return id;
  };

  const simulateFight = () => {
    const randomID = Math.random();
    const winner = randomID > 0.5 ? "left" : "right";
    setWinner(winner);
    //use power stats from the object
  };

  const grabHeroLeftData = async (apiKey) => {
    const id = await grabRandomID();
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/${apiKey}/${id}`
    );
    const data = await response.json();
    setsuperHeroLeftData(data);
  };

  const grabHeroRightData = async (apiKey) => {
    const id = await grabRandomID();
    //if the id is in unusable ids it'll not run and re-run a check until that id is there no more
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/${apiKey}/${id}`
    );
    const data = await response.json();
    setsuperHeroRightData(data);
  };

  useEffect(() => {
    grabHeroLeftData(import.meta.env.VITE_API_KEY);
    grabHeroRightData(import.meta.env.VITE_API_KEY);
  }, []);

  return (
    <div className="main-container">
      <div className="second-container">
        <FightCard style={{ marginRight: "10%" }} hero={superHeroLeftData} />
        <FightCard hero={superHeroRightData} />
        {console.log(superHeroRightData)}
        {/* <div>{superHeroLeftData.name}</div>
        <div>{superHeroRightData.name}</div> */}
        {/* <button onClick={() => grabHeroLeftData(import.meta.env.VITE_API_KEY)}>
          Randomise
        </button>
        <button onClick={() => grabHeroRightData(import.meta.env.VITE_API_KEY)}>
          Randomise
        </button>
        <button onClick={() => simulateFight()}>Fight</button> */}
      </div>
    </div>
  );
}
