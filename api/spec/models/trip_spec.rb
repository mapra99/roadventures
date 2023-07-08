require 'rails_helper'

RSpec.describe Trip, type: :model do
  subject(:trip) { build(:trip) }

  describe 'associations' do
    it { is_expected.to belong_to(:user) }
    it { is_expected.to have_many(:tracking_locations).dependent(:destroy) }
  end
end
