class Student < ActiveRecord::Base
  self.table_name = "Students"
  self.primary_key = "StudentId"

  MAPPINGS = [
      [:FirstName, :first_name],
      [:LastName, :last_name],
      [:BirthDate, :birth_date],
      [:Address, :address],
      [:Suburb, :suburb],
      [:Postcode, :postcode],
      [:State, :state],
      [:Phone, :phone],
      [:Email, :email],
      [:UpdatedTS, :updated_at],
      [:CreatedTS, :created_at]
  ]

  MAPPINGS.each do |columns|
    alias_attribute columns[1], columns[0]
  end
end
