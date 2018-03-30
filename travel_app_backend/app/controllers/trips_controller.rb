class TripsController < ApplicationController
  def index
    trips = Trip.all
    render json: trips
  end

  def create
    trip = Trip.create(trip_params)
    render json: trip
  end

  def join
    user = User.find_by_id(params[:user_id])
    code = params[:code].to_s

    if trip = Trip.find_by_rand_code(code)
      ut = UserTrip.new()
      ut.user_id = user.id
      ut.trip_id = trip.id
      ut.save!
      render json: trip, status: 201
    else
      render json: {errors: user.errors}, status: 404
    end
  end

  private
  def trip_params
    params.require(:trip).permit(:title, :city, :state, :country, :start_date, :end_date, :description, :link, :rand_code, :user_id)
  end
end
