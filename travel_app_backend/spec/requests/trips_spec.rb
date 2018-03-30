require 'rails_helper'

RSpec.describe "Trips", type: :request do

  describe "GET /trips/:id" do

    it "gets a list of trips" do
      Trip.create(
        title: 'Bahama Mama',
        start_date: '2018-08-08',
        end_date: '2018-08-15',
        description: 'spend a week with your toes in the sand!',
        link: 'www.discoverbahamas.com',
        city: 'Test',
        state: 'CA',
        country: 'USA',
        user_id: '1',
        rand_code: '102937'
      )
      get '/trips'
      json = JSON.parse(response.body)
      expect(response).to be_success

    end

    it "creates a trip from params" do
      trip_params = {
        trip: {
          title: 'Bahama Mama',
          start_date: '2018-08-08',
          end_date: '2018-08-15',
          description: 'spend a week with your toes in the sand!',
          link: 'www.discoverbahamas.com',
          city: 'Test',
          state: 'CA',
          country: 'USA',
          user_id: '1'
        }
      }

      post trips_path, params: trip_params
      expect(response).to have_http_status(200)
      json = JSON.parse(response.body)
      expect(json["title"]).to eq "Bahama Mama"

    end
  end
end
