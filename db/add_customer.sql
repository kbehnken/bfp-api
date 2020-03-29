INSERT INTO customers
    (customer_name, phone_number, email_address)
VALUES
    ($1, $2, $3)
RETURNING
    id,
    customer_name AS "customerName",
    phone_number AS "phoneNumber",
    email_address AS "emailAddress";
