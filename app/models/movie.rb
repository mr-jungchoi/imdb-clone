class Movie < ActiveRecord::Base
  validates_presence_of :title
  validates_uniqueness_of :youtube_trailer_id, :imdb_id

  def self.parse(youtube_response, omdb_response)
    youtube_hash = JSON.parse(youtube_response)
    omdb_hash = JSON.parse(omdb_response)
    youtube_id = youtube_hash["items"][0]["id"]["videoId"]

    self.new(title: omdb_hash["Title"], youtube_trailer_id: youtube_id, imdb_id: omdb_hash["imdbID"])
  end
end
