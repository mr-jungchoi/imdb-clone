class MovieView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {}
    }
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
      <Trailer movie={this.state.movie}/>
      <MovieInformation movie={this.state.movie}/>
    )
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value = ""
    }
  }

  // add event handlers for the search bar and include them in the render

  render() {
    return(
      <form id='randomize' action="/movies/show">
      <input type='text' name='search' placeholder='Movie Title'/>
      <input type='submit' value="Search"/>
      </form>
    )
  }
}

function MovieInformation(props) {
  const{year, rated, runtime, director, writer, actors, plot} = props.movie
  return(
    <div className="movie-information">
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

function Trailer(props) {
  return(
    <iframe id="player" type="text/html"
            width="1000" height="560"
            src={`https://www.youtube.com/embed/${props.movie.youtube_trailer_id}`}
            frameborder="0"
    ></iframe>
  )
}
