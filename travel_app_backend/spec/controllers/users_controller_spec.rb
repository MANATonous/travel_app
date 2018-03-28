require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  # it "creates a user" do
  #   user_params = {
  #     user: {
  #       first_name:'Test',
  #       last_name: 'Test',
  #       email: 'test@test.com',
  #       password: 'test',
  #       password_confirmation: 'test',
  #       city: 'test',
  #       state: 'test'
  #     }
  #   }
  #   post '/users', params: user_params
  #   expect(response).to have_http_status(201)
  #   json = JSON.parse(response.body)
  #   expect(json["user"]["first_name"]).to eq 'Test'
  # end
  #
  #   it "creates a new item" do
  #      expect {
  #        post '/users', { first_name:'Test',
  #              last_name: 'Test',
  #              email: 'test@test.com',
  #              password: 'test',
  #              password_confirmation: 'test',
  #              city: 'test',
  #              state: 'test', format: :json  }
  #      }.to change(User, :count).by(1)
  #    end


end
