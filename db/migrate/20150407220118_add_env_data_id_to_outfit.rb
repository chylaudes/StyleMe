class AddEnvDataIdToOutfit < ActiveRecord::Migration
  def change
    add_column :outfits, :env_data_id, :integer
  end
end
