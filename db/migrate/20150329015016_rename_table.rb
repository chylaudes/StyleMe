class RenameTable < ActiveRecord::Migration
  def change
    rename_table :env_dates, :env_data
  end
end
