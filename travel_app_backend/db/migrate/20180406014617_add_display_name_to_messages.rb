class AddDisplayNameToMessages < ActiveRecord::Migration[5.1]
  def change
    add_column :messages, :display_name, :string
  end
end
