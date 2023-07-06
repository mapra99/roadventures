require 'rails_helper'

RSpec.describe Api::V1::TestController, type: :controller do
  describe '#index' do
    describe 'when user is not authenticated' do
      before do
        get :index
      end

      it 'returns 401' do
        expect(response).to have_http_status(:unauthorized)
      end
    end

    describe 'when user is authenticated' do
      let(:user) { create(:user) }
      let(:json_response) { JSON.parse(response.body) }

      before do
        sign_in user
        get :index
      end

      it 'returns 200' do
        expect(response).to have_http_status(:ok)
      end

      it 'returns the user' do
        expect(json_response['user']['id']).to eq(user.id)
      end
    end
  end
end
