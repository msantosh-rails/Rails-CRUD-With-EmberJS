class CreateEmployees < ActiveRecord::Migration
  def change
    create_table :employees do |t|
      t.string :first_name
      t.string :last_name
      t.string :city
      t.string :experience
      t.string :skills

      t.timestamps
    end
  end
end
