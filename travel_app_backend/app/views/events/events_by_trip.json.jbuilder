json.array! @events_by_trip do |event|
  json.trip_id event.trip_id
  json.id event.id
  json.title event.title
  json.location event.location
  json.description event.description
  json.link event.link
  json.date event.date
end
