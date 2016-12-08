class Movie < ActiveRecord::Base
  validates_presence_of :title
  validates_uniqueness_of :youtube_trailer_id, :imdb_id
end
