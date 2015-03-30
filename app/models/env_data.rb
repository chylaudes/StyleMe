class EnvData < ActiveRecord::Base
  has_many :outfits
  belongs_to :user
end
