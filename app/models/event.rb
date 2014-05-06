class Event < ActiveRecord::Base
	belongs_to :household, :foreign_key => 'household_id'
end
