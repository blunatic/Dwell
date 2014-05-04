class AddHouseholdNameToUsers < ActiveRecord::Migration
  def change
  	add_column :users, :household_name, :string
  end
end
