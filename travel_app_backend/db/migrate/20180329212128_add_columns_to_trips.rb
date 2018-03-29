class AddColumnsToTrips < ActiveRecord::Migration[5.1]
  def change
    add_column :trips, :rand_code, :string
    add_column :trips, :user_id, :integer
    add_foreign_key :trips, :users
  end
end
