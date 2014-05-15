class AddAmountToBills < ActiveRecord::Migration
  def change
    add_column :bills, :amount, :integer
  end
end
