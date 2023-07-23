class AddTimestampsToTrips < ActiveRecord::Migration[7.0]
  def change
    add_column :trips, :started_at, :datetime
    add_column :trips, :finished_at, :datetime
  end
end
