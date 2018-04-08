class EventsController < ApplicationController
  # def index
  #   events = Event.all
  #   render json: events
  # end

  def events_by_trip
    @events_by_trip = Event.where("trip_id = #{params[:trip_id]}")
  end

  def create
    event = Event.new(event_params)
    event.save!
    render json: event
  end

  def destroy
    event = Event.find(params[:id])
    event.destroy!
  end

  private

  def event_params
    params.require(:event).permit(:title, :location, :date, :description, :link, :trip_id)
  end

end
