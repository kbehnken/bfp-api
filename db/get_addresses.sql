SELECT sa.id AS id, sa.street_address AS "streetAddress", sa.city, sa.state, sa.postal_code AS "postalCode", sa.user_id AS "userId", sa.map_url AS "mapUrl", sa.photo_url AS "photoUrl", sa.latitude, sa.longitude, sa.customer_id AS "customerId", sa.vendor_id AS "vendorId", a.id AS "assetId", a.make AS "assetMake", a.model AS "assetModel", a.category AS "assetCategory"
FROM service_addresses AS sa
LEFT JOIN users AS u
ON u.id = sa.user_id
LEFT JOIN assets_to_service_addresses AS atsa
ON atsa.service_address_id = sa.id
LEFT JOIN assets as a
ON atsa.asset_id = a.id;