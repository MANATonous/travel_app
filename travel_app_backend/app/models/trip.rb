class Trip < ApplicationRecord
  has_many :events
  has_many :users, :through => :user_trips
  has_many :user_trips
end
