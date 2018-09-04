class ApplicationController < ActionController::API
  def current_user 
    @current_user ||= User.find_by(id: session[:user_id])
  end
  # helper_method :current_user
  def authenticate_user!
    render plain: "please log in" unless current_user
  end
end
