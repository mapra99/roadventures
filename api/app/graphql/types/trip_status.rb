module Types
  class TripStatus < BaseEnum
    ::Trip::STATUSES.each do |status|
      value status
    end
  end
end
