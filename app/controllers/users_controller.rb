class UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @user.password= params[:password]
    @user.save!
    render json: {
      message: "user created successfully",
      user: @user
    }
  end

  def update
    @user = User.find_by(name: params[:name])
    @user.update(user_params)
    render json: {
      message: "coolcoolcool",
      user: @user
    }
  end

  private

  def user_params
    params.permit(:name, :password)
  end
end
