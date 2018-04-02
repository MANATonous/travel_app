class AddPaperclipToTrips < ActiveRecord::Migration[5.1]
  def change
    add_attachment :trips, :photo
  end
end
