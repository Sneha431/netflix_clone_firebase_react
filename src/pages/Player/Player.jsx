import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";
const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apidata, setapidata] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Mjc3NDQ4NGUyNmZhM2FkOTFiNGYyNjEwOGVkZmMwMyIsIm5iZiI6MTcxNzE2MDMxNC4xMzYsInN1YiI6IjY2NTljOTdhZGQyOGEyMjI0ZTk0MjBjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KIL94djvltFQWTNbkIo5NTMA-M-c7_0t1Wx8YQtSBVA",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setapidata(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <img
        src={back_arrow_icon}
        alt=""
        srcset=""
        onClick={() => navigate("/")}
      />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apidata.key}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="player-info">
        <p>{apidata.published_at.slice(0, 10)}</p>
        <p>{apidata.name}</p>
        <p>{apidata.type}</p>
      </div>
    </div>
  );
};

export default Player;
