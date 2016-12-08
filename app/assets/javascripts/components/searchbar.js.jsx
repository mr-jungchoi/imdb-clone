class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value = ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // add event handlers for the search bar and include them in the render
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    $.ajax({
      url: "/movies/show",
      data: {"search": this.state.value}
    })
    .done(function() {
      this.props.onSearch();
      this.setState({value: ""});
    })
  }

  render() {
    return(
      <form id='randomize' action="/movies/show" onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='search'
          placeholder='Movie Title'
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type='submit' value="Search" />
      </form>
    )
  }
}
