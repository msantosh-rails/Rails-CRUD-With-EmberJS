class Employee < ActiveRecord::Base
  attr_accessible :city, :experience, :first_name, :last_name, :skills
  validates :first_name, :presence => true
  validates :last_name, :presence => true
end
