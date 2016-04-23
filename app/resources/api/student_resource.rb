class Api::StudentResource < JSONAPI::Resource
  attributes :first_name, :last_name, :birth_date, :address, :suburb, :postcode, :state, :phone, :email,
             :updated_at, :created_at
  model_name 'Student'
end
