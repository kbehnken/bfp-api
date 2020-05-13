use bfp_api;
insert into users set   hash='12345';

insert into accounts set first_name='Tim', last_name='Behnken', phone_number='480-580-7412', email_address='tim@beachfamilypools.com', type='employee';
insert into accounts set first_name='Katrina', last_name='Behnken', phone_number='480-319-2011', email_address='katrina@beachfamilypools.com', type='employee';
insert into accounts set first_name='Diane', last_name='Graves', phone_number='', email_address='chezwhat@hotmail.com', type='customer';
insert into accounts set first_name='Tim', last_name='Stoner', phone_number='', email_address='supercool57@hotmail.com', type='customer';
insert into accounts set first_name='Jeremy', last_name='Saffell', phone_number='520-809-5403', email_address='jeremy@beachfamilypools.com', type='employee';
insert into accounts set first_name='PWP', last_name='PWP', phone_number='520-887-1100', email_address='pwptucson@poolwater.com', type='vendor'; 

insert into addresses set street_address='19152 E Kingbird Dr', city='Queen Creek', state='AZ', postal_code='85142', account_id=1;
insert into addresses set street_address='19152 E Kingbird Dr', city='Queen Creek', state='AZ', postal_code='85142', account_id=2;
insert into addresses set street_address='150 E Rudasill Rd', city='Tucson', state='AZ', postal_code='85704', account_id=3;
insert into addresses set street_address='819 E Hemet Pl', city='Oro Valley', state='AZ', postal_code='85755', account_id=4;
insert into addresses set street_address='10650 N Sand Canyon Pl', city='Tucson', state='AZ', postal_code='854737', account_id=4;
insert into addresses set street_address='1020 W Orange Grove Rd', city='Tucson', state='AZ', postal_code='85704', account_id=4;
insert into addresses set street_address='5734 E 31st St', city='Tucson', state='AZ', postal_code='85711', account_id=5;
insert into addresses set street_address='5845 N Shamrock Pl', city='Tucson', state='AZ', postal_code='85705', account_id=6;

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
