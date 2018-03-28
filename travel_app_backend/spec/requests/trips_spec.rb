require 'rails_helper'

describe "Trips API" do
  it "gets a list of trips" do
    Trip.create(title: 'Bahama Mama', start_date: '2018-08-08', end_date: '2018-08-15', description: 'spend a week with your toes in the sand!', link: 'www.discoverbahamas.com')
    get '/trips'
    json = JSON.parse(response.body)
    expect(response).to be_success
    expect(json.length).to eq 1
  end
end
