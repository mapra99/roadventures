class TrackingLocation < ApplicationRecord
  belongs_to :trip

  validates :latitude, presence: true
  validates :longitude, presence: true
  validates :recorded_at, presence: true
end
