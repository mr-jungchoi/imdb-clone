class MoviesController < ApplicationController
  def index
  end

  def show
    search_keyword = params[:search]
    youtube_response = open(youtube_url + search_keyword + youtube_token).read
    omdb_response = open(omdb_url + search_keyword).read

    @movie = Movie.parse(youtube_response, omdb_response)
  end

  private

  def movie_params
    params.require(:movie).permit(:title, :youtube_trailer_id, :imdb_id)
  end

  def youtube_url
    "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCi8e0iOVk1fEOogdfu4YgfA&q="
  end

  def omdb_url
    "http://www.omdbapi.com/?y=&plot=short&r=json&t="
  end
end
