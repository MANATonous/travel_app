require 'rails_helper'


RSpec.describe "Trips", type: :request do

  describe "GET /trips/:id" do

    let(:encoded_file) do
      file_path = File.join(Rails.root, 'spec', 'fixtures', 'sample-image.png')
      base64_image = Base64.encode64(File.read(file_path))
      "data:image/jpg;base64,#{base64_image}"
    end

##TODO fix this test; still failing
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
        rand_code: '102937',
        photo: encoded_file
      )

      get '/trips.json'
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
          user_id: '1',
          photo_base: encoded_file
        }
      }

      post trips_path, params: trip_params
      expect(response).to have_http_status(200)
      json = JSON.parse(response.body)
      expect(json["title"]).to eq "Bahama Mama"
      expect(json["rand_code"].length).to eq 6

    end

    it "creates a trip with a photo" do
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
          user_id: '1',
          rand_code: '102937',
          photo_base: encoded_file
        }
      }

      post trips_path, params: trip_params
      expect(response).to have_http_status(200)

      # test json response object
      json = JSON.parse(response.body)
      expect(json["photo_file_name"]).to_not be nil
      expect(json["title"]).to eq "Bahama Mama"
      expect(json["rand_code"].length).to eq 6
    end

  end
end
