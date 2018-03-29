require 'rails_helper'

RSpec.describe Trip, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"

  it "creates a trip" do
    trip = Trip.create(
      title:'Test',
      city: 'Test',
      state: 'test@test.com',
      country: 'test',
      description: 'test',
      start_date: '2018-01-02',
      end_date: '2018-01-03',
      link: 'test',
      user_id: '1',
      rand_code: '102937'
    )
  end
  
end
