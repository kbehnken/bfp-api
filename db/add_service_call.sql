INSERT INTO service_calls
(start_time, end_time, user_id, salt, phosphates, tds, filter_psi, chlorine, ph, alkalinity, cya, trichlor_shock, soda_ash, sodium_bicarbonate, tabs, granular_trichlor, phosphate_remover, muriatic_acid, sodium_thiosulfate, stabilizer, green_to_clean, de, service_address_id)
VALUES
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23);

RETURNING start_time AS startTime, end_time AS endTime, user_id AS userId, salt, phosphates, tds, filter_psi AS filterPsi, chlorine, ph, alkalinity, cya, trichlor_shock AS trichlorShock, soda_ash AS sodaAsh, sodium_bicarbonate AS sodiumBicarbonate, tabs, granular_trichlor AS granularTrichlor, phosphate_remover AS phosphateRemover, muriatic_acid AS muriaticAcid, sodium_thiosulfate AS sodiumThiosulfate, stabilizer, green_to_clean AS greenToClean, de, service_address_id, serviceAddressId