class User < ApplicationRecord
  has_secure_password
  has_many :user_trips
  has_many :trips, :through => :user_trips

  has_attached_file :avatar, styles: { small: "64x64", med: "100x100", large: "200x200" }
  validates_attachment :avatar, presence: true,
    content_type: { content_type: ["image/jpg", "image/jpeg", "image/png", "image/gif"] },
    size: { in: 0..10.megabytes }
  validates :first_name, :last_name, :email, :city, :state, presence: true
  validates :password, length: { in: 6..15 }
  validates :email, uniqueness: true
  validates :email, uniqueness: { case_sensitive: false }

  attr_accessor :avatar_base
  before_validation :parse_avatar_base

  private
  def parse_avatar_base
    if avatar_base
      image = Paperclip.io_adapters.for(avatar_base)
      image.original_filename = "file.#{image.content_type.split("/")[1]}"
      self.avatar = image
    end
  end
end
