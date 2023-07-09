class Trip < ApplicationRecord
  belongs_to :user
  has_many :tracking_locations, dependent: :destroy

  STARTED = :started
  FINISHED = :finished
  PLANNED = :planned

  STATUSES = [
    STARTED, FINISHED, PLANNED
  ].freeze
end
