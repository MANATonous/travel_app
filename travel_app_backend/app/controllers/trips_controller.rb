class TripsController < ApplicationController
  def index
    trips = Trip.all
    render json: trips
  end

  def find_trip
    #take in id from post
    #find the id
    #send the trip back as json
    singletrip = Trip.find_by_id(params[:trip_id])
    render json: singletrip, status: 201
  end


#inquire why private? and how to call private method from a public method within the same controller
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
