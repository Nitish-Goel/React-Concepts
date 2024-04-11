import "./Movie.css";

const Movie = (props) => {
  return (
    <div className="movie" >
        <img src={props.image} alt="" />      
        <p className="title" >{props.title}</p>
        <p className="year">Year: {props.year}</p>
    </div>
  )
}

export default Movie;
