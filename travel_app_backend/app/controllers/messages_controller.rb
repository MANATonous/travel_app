class MessagesController < ApplicationController

  def index
    @messages = Message.all
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
