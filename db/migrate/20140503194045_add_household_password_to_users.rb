class AddHouseholdPasswordToUsers < ActiveRecord::Migration
  def change
  	    add_column :users, :household_password, :string
  end
end
