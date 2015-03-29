class EnvData < ActiveRecord::Base
  has_many :outfits, dependent: :destroy
  validates :location, :weather_temp, :weather_state, :date, :user_id, presence: true
end