class Outfit < ActiveRecord::Base
  belongs_to :env_data
  belongs_to :user
end
