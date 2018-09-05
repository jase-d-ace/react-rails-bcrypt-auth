class SessionsController < ApplicationController
  def create
    user = User.find_by(name: params[:name])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: {
        user: user
      }
    else
      render plain: "stuff happend wrong"
    end
  end

  def destroy
    session[:user_id] = nil
    render json: {
      message: "successfully logged out",
      status: 200
    }
    # redirect_to "/login"
  end
end
