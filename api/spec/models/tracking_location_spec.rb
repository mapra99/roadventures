require 'rails_helper'

RSpec.describe TrackingLocation, type: :model do
  subject(:tracking_location) { build(:tracking_location) }

  describe 'associations' do
    it { is_expected.to belong_to(:trip) }
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:longitude) }
    it { is_expected.to validate_presence_of(:latitude) }
    it { is_expected.to validate_presence_of(:recorded_at) }
  end
end
