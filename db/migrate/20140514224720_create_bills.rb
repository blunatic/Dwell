class CreateBills < ActiveRecord::Migration
  def change
    create_table :bills do |t|
      t.string :content
      t.integer :household_id

      t.timestamps
    end
  end
end
