FactoryBot.define do
  factory :tracking_location do
    association :trip

    longitude { Faker::Address.longitude }
    latitude { Faker::Address.latitude }
    recorded_at { Faker::Time.backward }
  end
end
