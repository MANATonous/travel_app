require 'rails_helper'

RSpec.describe TripsController, type: :controller do

  it "generate_code generates a random_code when called" do
    rand_code = controller.generate_code(6)
    expect(rand_code.length).to eq 6
  end

end
