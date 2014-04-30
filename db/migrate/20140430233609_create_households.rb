class CreateHouseholds < ActiveRecord::Migration
  def change
    create_table :households do |t|
      t.string :household_name

      t.timestamps
    end
  end
end
