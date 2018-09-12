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
    if is_password?(@user.password_digest, params[:old_password])
      @user.password= params[:password]
      render json: {
        message: "coolcoolcool",
        user: @user
      }
    else
      render json: {
        message: "notcoolnotcoolnotcool",
        user: nil
      }
    end
  end

  private

  def user_params
    params.permit(:name, :password)
  end
end
