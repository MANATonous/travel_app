class EventsController < ApplicationController
  # def create
  #   event = Event.create(event_params)
  #   render json: event
  # end

  def create
    event = Event.new(event_params)
    event.save!
    render json: event
  end

  private
  def event_params
    params.require(:event).permit(:title, :location, :date, :description, :link, :trip_id)
  end
end
