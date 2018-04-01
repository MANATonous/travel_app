class UsersController < ApplicationController
  before_action :authenticate_user, only: :show
  def index
    @users = User.all
  end

  def show
    user = User.find params[:id]
    render json: user
  end

  # we ran into errors when creating and using strong params alone, so we broke out each individual assignment
  def create
    user = User.new()
    user.first_name = params[:first_name]
    user.last_name = params[:last_name]
    user.password = params[:password]
    user.password_confirmation = params[:password_confirmation]
    user.email = params[:email]
    user.city = params[:city]
    user.state = params[:state]
    user.avatar = params[:avatar_base]

    if user.save
      token = Knock::AuthToken.new(payload: { sub: user.id }).token
      payload = {
        user: user,
        jwt: token
      }
      render json: payload, status: 201
    else
      render json: {errors: user.errors}, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation, :city, :state, :avatar_base)
  end

end
