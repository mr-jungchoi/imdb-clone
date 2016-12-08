class MoviesController < ApplicationController
  @youtube_search = "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCi8e0iOVk1fEOogdfu4YgfA&q="
  @omdb_title_search = "http://www.omdbapi.com/y=&plot=short&r=json&t="

  def index
    youtube_response = open(@youtube_search + params[:search] + youtube_token).read
    omdb_response = open(@omdb_title_search + params[:search]).read

    @movie = Movie.parse(youtube_response, omdb_response)
  end

  def create
    @movie = Movie.new(movie_params)

    if @movie.save

    else

    end
  end

  def show

  end

  private

  def movie_params
    params.require(:movie).permit(:title, :youtube_trailer_id, :imdb_id)
  end
end
