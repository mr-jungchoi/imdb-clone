class CreateMovies < ActiveRecord::Migration[5.0]
  def change
    create_table :movies do |t|
      t.string   :title, null: false
      t.string   :youtube_trailer_id
      t.string   :imdb_id

      t.timestamps(null: false)
    end
  end
end
