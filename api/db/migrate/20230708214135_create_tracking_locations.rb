class CreateTrackingLocations < ActiveRecord::Migration[7.0]
  def change
    create_table :tracking_locations do |t|
      t.references :trip, null: false, foreign_key: true
      t.float :longitude, null: false
      t.float :latitude, null: false
      t.datetime :recorded_at, null: false

      t.timestamps
    end
  end
end
