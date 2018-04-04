class Trip < ApplicationRecord
  has_many :events
  has_many :users, :through => :user_trips
  has_many :user_trips

  has_attached_file :photo, styles: { med: "640x480" }

  validates_attachment :photo, presence: true,
    content_type: { content_type: ["image/jpg", "image/jpeg", "image/png", "image/gif"] },
    size: { in: 0..10.megabytes }
  validates :title, presence: true

  attr_accessor :photo_base
  before_validation :parse_photo_base

  private
  def parse_photo_base
    puts 'working'
    if photo_base
      image = Paperclip.io_adapters.for(photo_base)
      image.original_filename = "file.#{image.content_type.split("/")[1]}"
      self.photo = image
    end
  end
end
