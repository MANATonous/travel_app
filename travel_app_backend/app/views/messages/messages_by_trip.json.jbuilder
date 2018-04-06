json.array! @messages_by_trip do |message|
  json.user_id message.user_id
  json.trip_id message.trip_id
  json.display_name message.display_name
  json.message message.message
end
