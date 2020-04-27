use bfp_api;
insert into users set   hash='12345';

insert into accounts set first_name='Tim', last_name='Behnken', phone_number='480-580-7412', email_address='tbehnken@gmail.com';
insert into accounts set first_name='Katrina', last_name='Behnken', phone_number='480-319-2011', email_address='katringa.behnken@gmail.com';
insert into accounts set first_name='Diane', last_name='Graves', phone_number='520-123-4567', email_address='dgraves@gmail.com';
insert into accounts set first_name='Tim', last_name='Stoner', phone_number='520-987-6543', email_address='tstoner@gmail.com';
insert into accounts set first_name='Jeremy', last_name='Saffell', phone_number='520-987-6543', email_address='tstoner@gmail.com';

insert into addresses set street_address='19152 E Kingbird Drive', city='Queen Creek', state='AZ', postal_code='85142', account_id=1;
insert into addresses set street_address='19153 E Swan Drive', city='Queen Creek', state='AZ', postal_code='85142', account_id=2;
insert into addresses set street_address='12345 N Campbell Drive', city='Tucson', state='AZ', postal_code='85741', account_id=3;
insert into addresses set street_address='54321 E Speedway Blv', city='Tucson', state='AZ', postal_code='85741', account_id=4;
insert into addresses set street_address='14543 S Kolb', city='Tucson', state='AZ', postal_code='854742', account_id=4;

insert into assets set make='Craftsman', model="DF3240", category='Filter Pump';
insert into assets set make='Harbor Freight', model='PT345', category='Filter Pump';
insert into assets set make='Walmart', model='WM234', category='Float';

insert into assets_to_addresses set assetAssetId=1, addressAddressId=3;
insert into assets_to_addresses set assetAssetId=1, addressAddressId=1;
insert into assets_to_addresses set assetAssetId=2, addressAddressId=3;
insert into assets_to_addresses set assetAssetId=2, addressAddressId=4;

insert into services set name='Pool Cleaning, Monthly';
insert into services set name='Pool Cleaning, Weekly';
insert into services set name='Filter Pump Repair';

insert into service_calls set
start_time='2020-04-01 00:06:00', 
end_time='2020-04-01 00:07:00',          
user_id=1,
salt=0.1,
phostphate=5.3,
td=.44,
filter_psi=400,
chlorine=3.4,
ph=6.8,
alkalinity=4,
cya=.3,
trichlor_shock=4,
soda_ash=4.1,
sodium_bicarbonate=2,
tab=2,
granular_trichlor=.23,
phostphate_remover=3.2,
muriatic_acid=.21,
sodium_thiosulfate=.4,
stabilizer=34,
green_to_clean=.3,
de=1.1,
address_id=3;
insert into service_calls set
start_time='2020-04-01 00:06:00', 
end_time='2020-04-01 00:07:00',          
user_id=1,
salt=0.1,
phostphate=5.3,
td=.44,
filter_psi=400,
chlorine=3.4,
ph=6.8,
alkalinity=4,
cya=.3,
trichlor_shock=4,
soda_ash=4.1,
sodium_bicarbonate=2,
tab=2,
granular_trichlor=.23,
phostphate_remover=3.2,
muriatic_acid=.21,
sodium_thiosulfate=.4,
stabilizer=34,
green_to_clean=.3,
de=1.1,
address_id=1;
insert into service_calls set
start_time='2020-04-01 00:06:00', 
end_time='2020-04-01 00:07:00',          
user_id=1,
salt=0.1,
phostphate=5.3,
td=.44,
filter_psi=400,
chlorine=3.4,
ph=6.8,
alkalinity=4,
cya=.3,
trichlor_shock=4,
soda_ash=4.1,
sodium_bicarbonate=2,
tab=2,
granular_trichlor=.23,
phostphate_remover=3.2,
muriatic_acid=.21,
sodium_thiosulfate=.4,
stabilizer=34,
green_to_clean=.3,
de=1.1,
address_id=2;
insert into service_calls set
start_time='2020-04-01 00:06:00', 
end_time='2020-04-01 00:07:00',          
user_id=1,
salt=0.1,
phostphate=5.3,
td=.44,
filter_psi=400,
chlorine=3.4,
ph=6.8,
alkalinity=4,
cya=.3,
trichlor_shock=4,
soda_ash=4.1,
sodium_bicarbonate=2,
tab=2,
granular_trichlor=.23,
phostphate_remover=3.2,
muriatic_acid=.21,
sodium_thiosulfate=.4,
stabilizer=34,
green_to_clean=.3,
de=1.1,
address_id=4;
