class MovieView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {movie: {}};

    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie() {
    $.ajax({
      url:'movies/show'
      data: // search bar value
    })
    .done(response => {
      this.setState({
        movie: response
      })
    })
  }

  render() {
    return(
      <h2>{this.state.movie.title}</h2>
      <ShowTrailer movie={this.state.movie} />
      <ShowDetails movie={this.state.movie}/>
    )
  }
}

function ShowDetails(props) {
  const{year, rated, runtime, director, writer, actors, plot} = props.movie
  return(
    <div className="movie-details">
      <ul>
        <li>Year: {year}</li>
        <li>Rated: {rated}</li>
        <li>Runtime: {runtime}</li>
        <li>Director: {director}</li>
        <li>Writer(s): {writer}</li>
        <li>Actors: {actors}</li>
        <li>Plot: {plot}</li>
      </ul>
    </div>
  )
}

function ShowTrailer(props) {
  return(
    <iframe id="player" type="text/html"
            width="1000" height="560"
            src={`https://www.youtube.com/embed/${props.movie.youtube_trailer_id}`}
            frameborder="0"
    />
  )
}
