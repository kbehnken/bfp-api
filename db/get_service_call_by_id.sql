SELECT sc.id, sc.start_time, sc.end_time, sc.user_id, sc.salt, sc.phosphates, sc.tds, sc.filter_psi, sc.chlorine, sc.ph, sc.alkalinity, sc.cya, sc.trichlor_shock, sc.soda_ash, sc.sodium_bicarbonate, sc.tabs, sc.granular_trichlor, sc.phosphate_remover, sc.muriatic_acid, sc.sodium_thiosulfate, sc.stabilizer, sc.green_to_clean, sc.de, sc.service_address_id, CONCAT(u.first_name, ' ', u.last_name) AS technician
FROM service_calls AS sc
JOIN users AS u
ON u.id = sc.user_id
WHERE sc.id = $1;