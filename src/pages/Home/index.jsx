import { useEffect, useState } from "react";

export default function Home() {
  const [superHeroData, setsuperHeroData] = useState([{ name: "hello" }]);

  const grabHeroData = async () => {
    console.log(import.meta.env.VITE_API_KEY);
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/${
        import.meta.env.VITE_API_KEY
      }/1`
    );
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    grabHeroData();
  }, []);

  return <div>{superHeroData[0].name}</div>;
}
