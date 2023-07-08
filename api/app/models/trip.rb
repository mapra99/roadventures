class Trip < ApplicationRecord
  belongs_to :user
  has_many :tracking_locations, dependent: :destroy
end
