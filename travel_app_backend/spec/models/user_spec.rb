require 'rails_helper'

RSpec.describe User, type: :model do
  it "should exist" do
    user = User.create(first_name: 'Name', last_name: 'Name', password: 'secret', email: 'name@name.com')
    expect(user.save).to be true
  end

  it "should have secure password" do
    user = User.create(first_name: 'Name', last_name: 'Name', password: 'secret', email: 'name@name.com')
    user.save
    expect(user.authenticate('not-secret')).to be false
  end

  it "should fail on bad password confirmation" do
    user = User.create(first_name: 'Name', last_name: 'Name', password: 'secret', password_confirmation: 'not-secret', email: 'name@name.com')
    expect(user.save).to be false
  end

  it "should succeed on good password" do
    user = User.create(first_name: 'Name', last_name: 'Name', password: 'secret', password_confirmation: 'secret', email: 'name@name.com')
    expect(user.save).to be true
  end
end
