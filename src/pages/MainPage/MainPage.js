import React, { useCallback, useEffect, useState } from "react"
import "./MainPage.css"
import JSONDATA from "../../data/data.json"
import { Tranding } from "../Tranding/Tranding"
import { Card } from "./Card"

export const Main = () => {
  const { Featured } = JSONDATA

  const [selectedMovie, setSelectedMovie] = useState(Featured)

  useEffect(() => {
    const selectedMovieId = sessionStorage.getItem("selectedMovieId")
    if (selectedMovieId) {
      const movie = JSONDATA.TendingNow.find(
        (item) => item.Id === selectedMovieId
      )
      setSelectedMovie(movie || Featured)
    } else {
      setSelectedMovie(Featured)
    }
  }, [Featured])

  const imageUrl = selectedMovie
    ? selectedMovie.CoverImage
    : "/assets/FeaturedCoverImage.png"

  const handleMovieClick = useCallback(
    (movieId) => {
      setSelectedMovie(
        JSONDATA.TendingNow.find((item) => item.Id === movieId) || Featured
      )
    },
    [Featured]
  )

  return (
    <div className="main-page" style={{ backgroundImage: `url(${imageUrl})` }}>
      <Card selectedMovie={selectedMovie} onMovieClick={handleMovieClick} />
      <Tranding onMovieClick={handleMovieClick} />
      <video
        id="backgroundVideo"
        style={{
          display: "none",
          width: "200px",
          height: "200px",
          objectFit: "cover",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        controls={false}
      />
    </div>
  )
}
