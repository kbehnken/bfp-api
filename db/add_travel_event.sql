INSERT INTO travel_events
(event_time, latitude, longitude, service_address_id, user_id)
VALUES
($1, $2, $3, $4, $5);

RETURNING id, event_time AS eventTime, latitude, longitude, service_address_id AS serviceAddressId, user_id AS userId;