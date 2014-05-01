json.array!(@confessions) do |confession|
  json.extract! confession, :id, :content
  json.url confession_url(confession, format: :json)
end
