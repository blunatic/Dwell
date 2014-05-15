json.array!(@bills) do |bill|
  json.extract! bill, :id, :content, :household_id, :amount, :due_date
  json.url bill_url(bill, format: :json)
end
