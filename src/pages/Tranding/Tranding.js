import React, { useState, useEffect } from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import "./Tranding.css"
import JSONDATA from "../../data/data.json"
import { responsive } from "../../components/SidebarData"

export const Tranding = ({ onMovieClick }) => {
  const [selectedMovieId, setSelectedMovieId] = useState(JSONDATA.Featured.Id)

  const items = JSONDATA.TendingNow

  const handleMovieClick = (movieId = selectedMovieId) => {
    setSelectedMovieId(movieId)
    sessionStorage.setItem("selectedMovieId", movieId)
    onMovieClick(movieId)

    setTimeout(() => {
      const videoElement = document.getElementById("backgroundVideo")
      if (videoElement) {
        videoElement.style.display = "block"
        videoElement.src = items.find((item) => item.Id === movieId)?.VideoUrl
        videoElement.play()
      }
    }, 0)
  }

  useEffect(() => {
    const storedMovieId = sessionStorage.getItem("selectedMovieId")
    if (storedMovieId) {
      setSelectedMovieId(storedMovieId)
    }
  }, [])

  return (
    <div className="carousel-div">
      <h1>Tranding Now</h1>
      <Carousel responsive={responsive} infinite={true}>
        {items.map((item, index) => {
          return (
            <div
              className={`card ${
                selectedMovieId === item.Id ? "selected" : ""
              }`}
              key={index}
              onClick={() => handleMovieClick(item.Id)}
            >
              <img src={item.CoverImage} alt="" className="card-img" />
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}
