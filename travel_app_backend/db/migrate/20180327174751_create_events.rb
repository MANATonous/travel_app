class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :title
      t.string :location
      t.text :description
      t.string :link
      t.datetime :date
      t.references :trip, foreign_key: true

      t.timestamps
    end
  end
end
