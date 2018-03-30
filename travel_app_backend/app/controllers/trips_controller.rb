class TripsController < ApplicationController
  def index
    trips = Trip.all
    render json: trips
  end

  def generate_code(number)
    charset = Array('A'..'Z') + Array(0..9)
    Array.new(number) { charset.sample }.join
  end

  def create
    trip = Trip.new(trip_params)
    trip.rand_code = generate_code(6)
    trip.save
    render json: trip
  end


  private
  def trip_params
    params.require(:trip).permit(:title, :city, :state, :country, :start_date, :end_date, :description, :link, :user_id)
  end
end
