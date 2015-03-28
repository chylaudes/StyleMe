class CreateOutfits < ActiveRecord::Migration
  def change
    create_table :outfits do |t|
      t.integer :dress
      t.string :dress_url
      t.integer :top
      t.string :top_url
      t.integer :bottom
      t.string :bottom_url
      t.integer :shoe
      t.string :shoe_url
      t.integer :access_1
      t.string :access_1_url
      t.integer :access_2
      t.string :access_2_url

      t.timestamps null: false
    end
  end
end
