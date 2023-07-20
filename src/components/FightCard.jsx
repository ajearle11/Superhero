import React from "react";

export default function FightCard({ style, hero }) {
  return (
    <div style={style} className="card">
      <h1>{hero.name}</h1>
      <div className="image-container">
        {hero.image ? (
          <img className="card-image" src={hero.image.url} />
        ) : (
          <img
            className="card-image"
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjHgWcmlHvDhR36LAxJ7pVta7u7WC5fNqNP_igHwrl&s"
            }
            //should be a loading image thing
          />
        )}
      </div>
      {/* <p>{hero.appearance.gender}</p> */}
      <p>{hero.name}</p>
      <p>{hero.name}</p>
      <p>{hero.name}</p>
      <p>{hero.name}</p>
      <p>{hero.name}</p>
    </div>
  );
}
