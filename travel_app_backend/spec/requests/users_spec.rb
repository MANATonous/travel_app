require 'rails_helper'

RSpec.describe "Users", type: :request do

  describe "GET /users/:id" do

    it "creates a user" do
      payload = {
          first_name: 'Bob',
          last_name: 'John',
          email: 'bob@bobber.com',
          city: 'CA',
          state: 'CA',
          password: 'secret',
          password_confirmation: 'secret'
      }

      post users_path, params: payload
      expect(response).to have_http_status(201)
      json = JSON.parse(response.body)
      expect(json["user"]["first_name"]).to eq "Bob"
      expect(json["jwt"]).to_not be_blank
    end

    it "should return errors when fails to create" do
      payload = {
        first_name: 'Bob',
        last_name: 'John',
        email: 'bob@bobber.com',
        city: 'CA',
        state: 'CA',
        password: 'secret',
        password_confirmation: 'not-secret'
      }

      post users_path, params: payload
      expect(response).to have_http_status(422)
      json = JSON.parse(response.body)
      expect(json["errors"]["password_confirmation"]).to_not be_blank
    end

  end
end
