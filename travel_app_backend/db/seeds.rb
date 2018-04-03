user_attributes = [
  {
    first_name: 'Monica',
    last_name: 'Gellar',
    email: 'monica@friends.com',
    password: 'cleangirl',
    password_confirmation: 'cleangirl',
    city: 'New York',
    state: 'NY',
  },
  {
    first_name: 'Ross',
    last_name: 'Gellar',
    email: 'ross@friends.com',
    password: 'doctorguy',
    password_confirmation: 'doctorguy',
    city: 'New York',
    state: 'NY'
  },
  {
    first_name: 'Rachel',
    last_name: 'Green',
    email: 'rachel@friends.com',
    password: 'valleygirl',
    password_confirmation: 'valleygirl',
    city: 'New York',
    state: 'NY'
  },
  {
    first_name: 'Joey',
    last_name: 'Tribiani',
    email: 'joey@friends.com',
    password: 'suaveguy',
    password_confirmation: 'suaveguy',
    city: 'New York',
    state: 'NY'
  },
  {
    first_name: 'Chandler',
    last_name: 'Bing',
    email: 'chandler@friends.com',
    password: 'funnyguy',
    password_confirmation: 'funnyguy',
    city: 'New York',
    state: 'NY'
  },
  {
    first_name: 'Phoebe',
    last_name: 'Buffet',
    email: 'phoebe@friends.com',
    password: 'weirdgirl',
    password_confirmation: 'weirdgirl',
    city: 'New York',
    state: 'NY'
  }
]

user_attributes.each do |attributes|
  User.create(attributes)
end

trip_attributes = [
  {
    title: 'Las Vegas',
    description: 'Rachel and Ross''s wedding',
    city: 'Las Vegas',
    state: 'NV',
    country: 'USA',
    start_date: '2018-08-22',
    end_date: '2018-08-24',
    link: 'www.google.com',
    rand_code: '000000',
    user_id: 1
  },
  {
    title: 'London',
    description: 'Ross''s Other Wedding, to that one girl',
    city: 'London',
    state: 'NA',
    country: 'UK',
    start_date: '2015-09-15',
    end_date: '2015-09-29',
    link: 'www.friends.com',
    rand_code: '000001',
    user_id: 1
  },
  {
    title: 'New York',
    description: 'Ross''s first wedding to the lesbian',
    city: 'New York',
    state: 'NY',
    country: 'USA',
    start_date: '2013-03-29',
    end_date: '2013-04-15',
    link: 'www.hey.com',
    rand_code: '000002',
    user_id: 4
  }
]

trip_attributes.each do |attribute|
  Trip.create(attribute)
end

user_trip_attributes = [
  {
    user_id: 1,
    trip_id: 1
  },
  {
    user_id: 1,
    trip_id: 2
  },
  {
    user_id: 3,
    trip_id: 1
  },
  {
    user_id: 3,
    trip_id: 2
  },
  {
    user_id: 2,
    trip_id: 3
  },
  {
    user_id: 4,
    trip_id: 1
  },
  {
    user_id: 5,
    trip_id: 1
  },
  {
    user_id: 6,
    trip_id: 2
  }
]

user_trip_attributes.each do |attribute|
  UserTrip.create(attribute)
end

message_attributes = [
  {
    user_id: "1",
    trip_id: '1',
    message: "Hey guys, let's go on a trip!"
  },
  {
    user_id: "2",
    trip_id: '2',
    message: "Where should be go?"
  },
  {
    user_id: "3",
    trip_id: '2',
    message: "How about Atlantic City?!"
  },
  {
    user_id: "1",
    trip_id: '1',
    message: "No, let's go to Vegas instead!"
  },
  {
    user_id: "1",
    trip_id: '3',
    message: "Sounds good to me"
  },
  {
    user_id: "3",
    trip_id: '1',
    message: "Count me in, too!"
  }
]

message_attributes.each do |attribute|
  Message.create(attribute)
end
