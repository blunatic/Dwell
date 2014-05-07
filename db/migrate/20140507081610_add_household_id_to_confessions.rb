class AddHouseholdIdToConfessions < ActiveRecord::Migration
  def change
  	add_column :confessions, :household_id, :integer
  end
end
