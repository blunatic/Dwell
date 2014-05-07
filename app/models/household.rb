class Household < ActiveRecord::Base
	has_many :users
	has_many :events
	has_many :confessions
	accepts_nested_attributes_for :users
	accepts_nested_attributes_for :events
	accepts_nested_attributes_for :confessions



	validates :name, :presence => true
	validates :password, :presence => true

end
