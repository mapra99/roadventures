class AddStatusToTrips < ActiveRecord::Migration[7.0]
  def change
    add_column :trips, :status, :string, null: false, default: 'started'
  end
end
