DELETE FROM assets_to_service_addresses
WHERE asset_id = $1
AND service_address_id = $2;