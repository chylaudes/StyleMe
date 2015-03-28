class CreateEnvDates < ActiveRecord::Migration
  def change
    create_table :env_dates do |t|
      t.string :location
      t.integer :weather_temp
      t.string :weather_state
      t.date :date
      t.string :occasion
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
