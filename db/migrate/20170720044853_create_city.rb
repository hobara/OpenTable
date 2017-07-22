class CreateCity < ActiveRecord::Migration[5.1]
  def change
    create_table :cities do |t|
      t.string :name, null: false
      t.string :image, null: false
    end
  end
end
