json.array!(@households) do |household|
  json.extract! household, :id, :name, :password
  json.url household_url(household, format: :json)
end
