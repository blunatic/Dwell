class RemoveUserIdFromHouseholds < ActiveRecord::Migration
  def change
  	remove_column :households, :user_id
  end
end
