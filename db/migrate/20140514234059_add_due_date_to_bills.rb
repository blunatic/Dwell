class AddDueDateToBills < ActiveRecord::Migration
  def change
    add_column :bills, :due_date, :date
  end
end
