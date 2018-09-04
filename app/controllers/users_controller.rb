class UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @user.password= params[:password]
    @user.save!
  end

  private

  def user_params
    params.permit(:name, :password)
  end
end
