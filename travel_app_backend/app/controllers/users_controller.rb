class UsersController < ApplicationController
# we ran into errors when creating from params alone, so we broke out each individual assignment
  def create
    user = User.new()
    user.first_name = params[:first_name]
    user.last_name = params[:last_name]
    user.password = params[:password]
    user.password_confirmation = params[:password_confirmation]
    user.email = params[:email]
    user.city = params[:city]
    user.state = params[:state]

    if user.save!
      render json: user, status: 201
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation, :city, :state)
  end

end
