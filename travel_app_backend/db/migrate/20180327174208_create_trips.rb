class CreateTrips < ActiveRecord::Migration[5.1]
  def change
    create_table :trips do |t|
      t.string :title
      t.text :description
      t.string :city
      t.string :state
      t.string :country
      t.datetime :start_date
      t.datetime :end_date
      t.text :link

      t.timestamps
    end
  end
end
