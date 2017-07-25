class CreateFavorite < ActiveRecord::Migration[5.1]
  def change
    create_table :favorites do |t|
      t.integer :user_id, null: false
      t.integer :restaurant_id, null: false
    end
  end
end
