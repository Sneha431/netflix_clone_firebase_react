import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import { Link } from "react-router-dom";

// import cards_data from "./../../assets/cards/Cards_data";

const TitleCards = ({ title, category }) => {
  const cardsRef = useRef();
  const [apidata, setapidata] = useState([]);
  const handlewheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.delayY;
  };
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Mjc3NDQ4NGUyNmZhM2FkOTFiNGYyNjEwOGVkZmMwMyIsIm5iZiI6MTcxNzE2MDMxNC4xMzYsInN1YiI6IjY2NTljOTdhZGQyOGEyMjI0ZTk0MjBjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KIL94djvltFQWTNbkIo5NTMA-M-c7_0t1Wx8YQtSBVA",
      },
    };
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setapidata(res.results))
      .catch((err) => console.error(err));
    cardsRef.current.addEventListener("wheel", handlewheel);
  }, []);

  return (
    <div className="titlecards">
      <h2>{title ? title : "Popular on netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apidata.map((card, index) => {
          return (
            // <div className="card" key={index}>
            //   <img src={card.image} alt={card.name} />
            //   <p>{card.name}</p>
            // </div>
            <Link className="card" key={index} to={`/player/${card.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${card.backdrop_path}`}
                alt={card.original_title}
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
