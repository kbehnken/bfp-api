INSERT INTO service_calls
(start_time, end_time, user_id, salt, phosphates, tds, filter_psi, chlorine, ph, alkalinity, cya, trichlor_shock, soda_ash, sodium_bicarbonate, tabs, granular_trichlor, phosphate_remover, muriatic_acid, sodium_thiosulfate, stabilizer, green_to_clean, de, service_address_id)
VALUES
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23);

SELECT * FROM services_calls;