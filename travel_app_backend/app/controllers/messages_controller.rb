class MessagesController < ApplicationController

  def messages_by_trip
    @messages_by_trip = Message.where("trip_id = #{params[:trip_id]}")
  end

  def create
    message = Message.new(message_params)
    message.message = params[:message_text]
    message.save!
    render json: message
  end

  private

  def message_params
    params.require(:message).permit(:user_id, :trip_id, :message_text)
  end

end
