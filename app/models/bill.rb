class Bill < ActiveRecord::Base
	belongs_to :household, :foreign_key => 'household_id'
	#attr_accessible :content, house_hold_id 

	#attr_accessible :content, :user_id
	validates :content, :length => {:maximum => 140}
	validates :amount, :presence => true
	validates :due_date, :presence => true

end
