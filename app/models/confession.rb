class Confession < ActiveRecord::Base
	#belong to house hold 
	#attr_accessible :content, house_hold_id 

	#attr_accessible :content, :user_id
	validates :content, :length => {:maximum => 140}

end
