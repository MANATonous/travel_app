require 'rails_helper'


RSpec.describe "Messages", type: :request do

  describe "messages api" do

    it "creates a message with params" do
      message_params = {
        message: {
          user_id: "1",
          trip_id: "1",
          message: "This is a test",
        }
      }

      post messages_path, params: message_params
      expect(response).to have_http_status(200)
      json = JSON.parse(response.body)
      expect(json["message"]).to eq "This is a test"
    end


  end
end
