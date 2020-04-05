DELETE FROM services_to_service_calls
WHERE service_id = $1
AND service_call_id = $2;