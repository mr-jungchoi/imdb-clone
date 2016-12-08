class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def youtube_token
    @youtube_token ||= "&key=#{Dotenv.load["YOUTUBE_TOKEN"]}"
  end
end
