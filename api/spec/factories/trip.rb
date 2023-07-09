FactoryBot.define do
  factory :trip do
    association :user
    status { Trip::STATUSES.sample }
  end
end
