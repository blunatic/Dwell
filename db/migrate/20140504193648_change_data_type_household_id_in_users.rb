class ChangeDataTypeHouseholdIdInUsers < ActiveRecord::Migration
  def change
  	  	change_column :users, :household_id, :integer
  end
end
