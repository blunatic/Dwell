class AddHouseholdIdToEvents < ActiveRecord::Migration
  def change
  	add_column :events, :household_id, :integer
  end
end
