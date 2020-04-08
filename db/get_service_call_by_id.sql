SELECT sc.id AS id, sc.start_time AS "startTime", sc.end_time AS "endTime", sc.user_id AS "userId", sc.salt, sc.phosphates, sc.tds, sc.filter_psi AS "filterPsi", sc.chlorine, sc.ph, sc.alkalinity, sc.cya, sc.trichlor_shock AS "trichlorShock", sc.soda_ash AS "sodaAsh", sc.sodium_bicarbonate AS "sodiumBicarbonate", sc.tabs, sc.granular_trichlor AS "granularTrichlor", sc.phosphate_remover AS "phosphateRemover", sc.muriatic_acid AS "muriaticAcid", sc.sodium_thiosulfate AS "sodiumThiosulfate", sc.stabilizer, sc.green_to_clean As "greenToClean", sc.de, sc.service_address_id AS "serviceAddressId", CONCAT(u.first_name, ' ', u.last_name) AS technician, c.customer_name AS customer, s.id AS "serviceId", s.name AS "serviceName"
FROM service_calls AS sc
LEFT JOIN users AS u
ON u.id = sc.user_id
LEFT JOIN service_addresses AS sa
ON sa.id = sc.service_address_id
LEFT JOIN customers AS c
ON c.id = sa.customer_id
LEFT JOIN services_to_service_calls AS stsc
ON stsc.service_call_id = sc.id
LEFT JOIN services as s
ON stsc.service_id = s.id
WHERE sc.id = $1;