import "./MainPage.css"

export const Card = ({ selectedMovie, onMovieClick }) => {
  return (
    <div className="move-info-container">
      <div className="move-info-block">
        <p className="category-txt">{selectedMovie?.Category}</p>
        <img
          src={selectedMovie.TitleImage}
          alt={selectedMovie.Title}
          className="movie-title-img"
        />
        <div className="move-description-block">
          <p className="release-year-txt">{selectedMovie.ReleaseYear}</p>
          <p className="rating-txt">{selectedMovie.MpaRating}</p>
          <p className="all-duration">1h 48m</p>
        </div>
        <p className="lorem-ipsum">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          maxime quidem architecto repellat beatae, possimus consectetur ab
          suscipit quia incidunt dolores accusantium{" "}
          {`${selectedMovie.Duration}`}.
        </p>

        <div className="video-btns">
          <button
            className="btn-play btn-video"
            onClick={() => onMovieClick(selectedMovie.Id)}
          >
            Play
          </button>

          <button className="more-info-btn btn-video">More Info</button>
        </div>
      </div>
    </div>
  )
}
