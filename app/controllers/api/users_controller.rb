class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      log_in(@user)
    else
      render json: @user.errors.full_messages, status: 422
    end
  end


  def show
    @user = User.find(params[:id])
    # if @user && @user == current_user
      # render "api/users/show"
    # else
      # render json: @user.errors.full_messages, status: 422
    # end
  end





  def user_params
    params.require(:user).permit(:username, :password, :email)
  end

end
