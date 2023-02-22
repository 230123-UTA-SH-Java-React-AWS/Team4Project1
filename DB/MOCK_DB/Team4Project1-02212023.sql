drop table account_types;
drop table accounts;
drop table users;

create table users (
	id serial primary key,
	fname varchar(50),
	lname varchar(50),
	address varchar(50),
	username varchar(50) unique,
	email varchar(50) unique,
	pass varchar(50) not null
);
insert into users (username, email, pass) values ('testuser', 'test@test.com', 'test');

create table account_types (
	id integer primary key,
	account_type varchar(50)
);
insert into account_types (id, account_type) values (1, 'CHECKING'), (2, 'SAVINGS');
	

create table accounts (
	id serial primary key,
	user_id integer references users(id) not null,
	account_name varchar(50) not null,
	balance decimal(100,2) default 0.00,
	account_type integer references account_types(id) default 1
);
insert into accounts (user_id, account_name) values (1, 'test');

----------------DQL-----------------------------

select * from users
select * from accounts
select * from account_types




---------------------MOCK DATA--------------------------------

insert into users (id, fname, lname, address, username, email, pass) values (1, 'Murdoch', 'Redfield', '61 8th Road', 'mredfield0', 'mredfield0@boston.com', 'iWFC1hNqiDE');
insert into users (id, fname, lname, address, username, email, pass) values (2, 'Wendy', 'Durran', '5 Nelson Plaza', 'wdurran1', 'wdurran1@nationalgeographic.com', 'KYmMZs1hD');
insert into users (id, fname, lname, address, username, email, pass) values (3, 'Carey', 'Garrod', '7 Melody Court', 'cgarrod2', 'cgarrod2@msu.edu', 'zpP0NdfTlM');
insert into users (id, fname, lname, address, username, email, pass) values (4, 'Avril', 'Deans', '8 Prairieview Hill', 'adeans3', 'adeans3@github.com', '6HwH2W');
insert into users (id, fname, lname, address, username, email, pass) values (5, 'Stavros', 'Skinn', '52 Briar Crest Alley', 'sskinn4', 'sskinn4@dell.com', 'D3hKTsKBB2Ha');
insert into users (id, fname, lname, address, username, email, pass) values (6, 'Donica', 'Knaggs', '7 Cherokee Avenue', 'dknaggs5', 'dknaggs5@t.co', '1Jeu4IeYh');
insert into users (id, fname, lname, address, username, email, pass) values (7, 'Darcey', 'Tretwell', '3 Sullivan Street', 'dtretwell6', 'dtretwell6@joomla.org', 'e6XIcTI4lYX9');
insert into users (id, fname, lname, address, username, email, pass) values (8, 'Danika', 'Raden', '3 Kipling Crossing', 'draden7', 'draden7@archive.org', 'FG3D8XMnIV4');
insert into users (id, fname, lname, address, username, email, pass) values (9, 'Kylie', 'Jansik', '51 Roth Park', 'kjansik8', 'kjansik8@washington.edu', 'd1m8lfzJ');
insert into users (id, fname, lname, address, username, email, pass) values (10, 'Coop', 'Ronan', '856 Anzinger Lane', 'cronan9', 'cronan9@google.co.uk', 'UiU5pvs');
insert into users (id, fname, lname, address, username, email, pass) values (11, 'Parsifal', 'Saltmarsh', '78721 Marcy Crossing', 'psaltmarsha', 'psaltmarsha@blog.com', 'Nw4VORPUw0d');
insert into users (id, fname, lname, address, username, email, pass) values (12, 'Jeni', 'Beastall', '38870 Kensington Trail', 'jbeastallb', 'jbeastallb@t-online.de', 'HrRI1F');
insert into users (id, fname, lname, address, username, email, pass) values (13, 'Netty', 'Torri', '83 Fallview Road', 'ntorric', 'ntorric@woothemes.com', 'Sr7DxJwNG9a');
insert into users (id, fname, lname, address, username, email, pass) values (14, 'Addia', 'Dreier', '9143 Pennsylvania Center', 'adreierd', 'adreierd@merriam-webster.com', 'PJifzY');
insert into users (id, fname, lname, address, username, email, pass) values (15, 'Thorin', 'Garrat', '10 Lunder Center', 'tgarrate', 'tgarrate@lulu.com', 'P5NmeV2');
insert into users (id, fname, lname, address, username, email, pass) values (16, 'Caril', 'Vaisey', '58 Crownhardt Park', 'cvaiseyf', 'cvaiseyf@marketwatch.com', 'OqRqhqrKNujz');
insert into users (id, fname, lname, address, username, email, pass) values (17, 'Borden', 'Barrabeale', '74 Spaight Junction', 'bbarrabealeg', 'bbarrabealeg@cafepress.com', 'siMQapO');
insert into users (id, fname, lname, address, username, email, pass) values (18, 'Vania', 'Pedrazzi', '60852 Muir Lane', 'vpedrazzih', 'vpedrazzih@alexa.com', '5u5cKOJW');
insert into users (id, fname, lname, address, username, email, pass) values (19, 'Erena', 'Melarkey', '88263 Bayside Crossing', 'emelarkeyi', 'emelarkeyi@ca.gov', 'f5FMSqXm4');
insert into users (id, fname, lname, address, username, email, pass) values (20, 'Deloria', 'Witheford', '45109 Tennyson Plaza', 'dwithefordj', 'dwithefordj@ft.com', 'V59ai6zIH');
insert into users (id, fname, lname, address, username, email, pass) values (21, 'Gerry', 'Bengochea', '249 Erie Trail', 'gbengocheak', 'gbengocheak@slideshare.net', 'hkWBSXqSc20');
insert into users (id, fname, lname, address, username, email, pass) values (22, 'Zaria', 'Gorner', '649 Hoard Center', 'zgornerl', 'zgornerl@baidu.com', 'LMxlttS3');
insert into users (id, fname, lname, address, username, email, pass) values (23, 'Robinia', 'Speedin', '71 Sugar Street', 'rspeedinm', 'rspeedinm@ucoz.com', 'he5hdt91BSz');
insert into users (id, fname, lname, address, username, email, pass) values (24, 'Valerie', 'Birtwisle', '1231 Mallory Junction', 'vbirtwislen', 'vbirtwislen@creativecommons.org', '4shfU0D');
insert into users (id, fname, lname, address, username, email, pass) values (25, 'Feodor', 'Muzzall', '334 Lake View Road', 'fmuzzallo', 'fmuzzallo@netscape.com', '12MVtphxR');
insert into users (id, fname, lname, address, username, email, pass) values (26, 'Patricia', 'Jeffers', '6 Melby Street', 'pjeffersp', 'pjeffersp@omniture.com', 'AkjUtg26GT');
insert into users (id, fname, lname, address, username, email, pass) values (27, 'Eugen', 'Walters', '5750 Basil Crossing', 'ewaltersq', 'ewaltersq@ebay.com', 'kSAgbYtPgX9');
insert into users (id, fname, lname, address, username, email, pass) values (28, 'Domenico', 'Fulle', '537 Donald Court', 'dfuller', 'dfuller@washington.edu', 'FFxq0YixN');
insert into users (id, fname, lname, address, username, email, pass) values (29, 'Katlin', 'Myring', '331 Helena Park', 'kmyrings', 'kmyrings@dailymotion.com', 'VBhWiC3F2DC');
insert into users (id, fname, lname, address, username, email, pass) values (30, 'Gilbertine', 'Dressel', '0 Harper Plaza', 'gdresselt', 'gdresselt@hostgator.com', 'JdLtP5gPxu');
insert into users (id, fname, lname, address, username, email, pass) values (31, 'Beaufort', 'Castrillo', '8 American Point', 'bcastrillou', 'bcastrillou@sina.com.cn', 'cqehWInAQT');
insert into users (id, fname, lname, address, username, email, pass) values (32, 'Wain', 'McLeese', '42353 Melby Terrace', 'wmcleesev', 'wmcleesev@goo.ne.jp', 'T1fYLVPZQN');
insert into users (id, fname, lname, address, username, email, pass) values (33, 'Lea', 'Hilhouse', '5194 Judy Way', 'lhilhousew', 'lhilhousew@mozilla.com', 'sMJtQgOsVs');
insert into users (id, fname, lname, address, username, email, pass) values (34, 'Stern', 'Klaiser', '730 Marcy Pass', 'sklaiserx', 'sklaiserx@columbia.edu', 'YzWOu2');
insert into users (id, fname, lname, address, username, email, pass) values (35, 'Rik', 'Wooller', '10 Merry Junction', 'rwoollery', 'rwoollery@xrea.com', 'eZ7Rmt0n');
insert into users (id, fname, lname, address, username, email, pass) values (36, 'Nikola', 'O''Neary', '0 Express Hill', 'nonearyz', 'nonearyz@cyberchimps.com', 'iBwJ8ysMrS');
insert into users (id, fname, lname, address, username, email, pass) values (37, 'Emory', 'Holah', '7 Prairieview Center', 'eholah10', 'eholah10@redcross.org', 'd23TnB');
insert into users (id, fname, lname, address, username, email, pass) values (38, 'Victoria', 'Southard', '63 Ramsey Way', 'vsouthard11', 'vsouthard11@stanford.edu', '9xWkjLv28P');
insert into users (id, fname, lname, address, username, email, pass) values (39, 'Lionel', 'Pawlata', '5 Sunfield Place', 'lpawlata12', 'lpawlata12@ameblo.jp', 'ou0MrKEAZ');
insert into users (id, fname, lname, address, username, email, pass) values (40, 'Betteann', 'Kwiek', '266 Kings Place', 'bkwiek13', 'bkwiek13@foxnews.com', 'LjuxzzFW');
insert into users (id, fname, lname, address, username, email, pass) values (41, 'Paton', 'Osgordby', '405 Swallow Crossing', 'posgordby14', 'posgordby14@de.vu', 'v0asLtH45fpf');
insert into users (id, fname, lname, address, username, email, pass) values (42, 'Robinson', 'Strognell', '18 Anderson Circle', 'rstrognell15', 'rstrognell15@vinaora.com', 'IKPpoYgHVDak');
insert into users (id, fname, lname, address, username, email, pass) values (43, 'Cristal', 'Eyton', '12643 New Castle Plaza', 'ceyton16', 'ceyton16@e-recht24.de', 'o6P2O1A355OB');
insert into users (id, fname, lname, address, username, email, pass) values (44, 'Justinian', 'Kolakovic', '3 Buell Center', 'jkolakovic17', 'jkolakovic17@barnesandnoble.com', 'EU6jRP6LZ');
insert into users (id, fname, lname, address, username, email, pass) values (45, 'Foss', 'Brearty', '78720 American Ash Terrace', 'fbrearty18', 'fbrearty18@gov.uk', 'jkQFpBBEz6QQ');
insert into users (id, fname, lname, address, username, email, pass) values (46, 'Druci', 'Bianco', '907 Myrtle Alley', 'dbianco19', 'dbianco19@cpanel.net', 'vAlEnZJ5m');
insert into users (id, fname, lname, address, username, email, pass) values (47, 'Mata', 'MacCallion', '00944 Monica Point', 'mmaccallion1a', 'mmaccallion1a@china.com.cn', 'sJ4QmK5nSAV');
insert into users (id, fname, lname, address, username, email, pass) values (48, 'Jeana', 'Schutt', '433 Canary Plaza', 'jschutt1b', 'jschutt1b@slideshare.net', '3Me8EZH62w');
insert into users (id, fname, lname, address, username, email, pass) values (49, 'Rhonda', 'Pourveer', '3398 Florence Alley', 'rpourveer1c', 'rpourveer1c@arstechnica.com', 'VubDphNm');
insert into users (id, fname, lname, address, username, email, pass) values (50, 'Rabbi', 'Lawn', '8 Roxbury Trail', 'rlawn1d', 'rlawn1d@flavors.me', 'Wbc0ikocg');

insert into accounts (id, user_id, account_name, balance, account_type) values (1, 1, 'Industrial', 60949.34, 2);
insert into accounts (id, user_id, account_name, balance, account_type) values (2, 2, 'Beauty', 37457.0, 1);
insert into accounts (id, user_id, account_name, balance, account_type) values (3, 3, 'Clothing', 44973.08, 1);
insert into accounts (id, user_id, account_name, balance, account_type) values (4, 4, 'Health', 9378.94, 1);
insert into accounts (id, user_id, account_name, balance, account_type) values (5, 5, 'Industrial', 82462.56, 1);
insert into accounts (id, user_id, account_name, balance, account_type) values (6, 6, 'Outdoors', 84419.16, 2);
insert into accounts (id, user_id, account_name, balance, account_type) values (7, 7, 'Electronics', 75498.88, 1);
insert into accounts (id, user_id, account_name, balance, account_type) values (8, 8, 'Computers', 42012.91, 2);
insert into accounts (id, user_id, account_name, balance, account_type) values (9, 9, 'Grocery', 53827.22, 1);
insert into accounts (id, user_id, account_name, balance, account_type) values (10, 10, 'Computers', 17460.57, 2);
insert into accounts (id, user_id, account_name, balance, account_type) values (11, 11, 'Electronics', 76760.68, 1);
insert into accounts (id, user_id, account_name, balance, account_type) values (12, 12, 'Beauty', 8064.74, 1);
insert into accounts (id, user_id, account_name, balance, account_type) values (13, 13, 'Home', -1011.89, 2);
insert into accounts (id, user_id, account_name, balance, account_type) values (14, 14, 'Movies', 95143.55, 2);
insert into accounts (id, user_id, account_name, balance, account_type) values (15, 15, 'Sports', -41.64, 1);
insert into accounts (id, user_id, account_name, balance, account_type) values (16, 16, 'Games', 86671.18, 2);
insert into accounts (id, user_id, account_name, balance, account_type) values (17, 17, 'Industrial', 91018.67, 2);
insert into accounts (id, user_id, account_name, balance, account_type) values (18, 18, 'Computers', 74053.55, 1);
insert into accounts (id, user_id, account_name, balance, account_type) values (19, 19, 'Industrial', 26564.68, 2);
insert into accounts (id, user_id, account_name, balance, account_type) values (20, 20, 'Garden', 67166.92, 1);
insert into accounts (id, user_id, account_name, balance, account_type) values (21, 21, 'Garden', 64121.85, 2);
insert into accounts (id, user_id, account_name, balance, account_type) values (22, 22, 'Books', 5753.86, 1);
insert into accounts (id, user_id, account_name, balance, account_type) values (23, 23, 'Shoes', 99488.33, 2);
insert into accounts (id, user_id, account_name, balance, account_type) values (24, 24, 'Games', 92195.73, 1);
insert into accounts (id, user_id, account_name, balance, account_type) values (25, 25, 'Books', 68100.08, 2);
insert into accounts (id, user_id, account_name, balance, account_type) values (26, 26, 'Automotive', 66413.88, 1);
insert into accounts (id, user_id, account_name, balance, account_type) values (27, 27, 'Movies', 23375.66, 2);
insert into accounts (id, user_id, account_name, balance, account_type) values (28, 28, 'Beauty', 92247.53, 1);
insert into accounts (id, user_id, account_name, balance, account_type) values (29, 29, 'Books', 26465.43, 2);
insert into accounts (id, user_id, account_name, balance, account_type) values (30, 30, 'Computers', 28319.44, 2);
insert into accounts (id, user_id, account_name, balance, account_type) values (31, 31, 'Kids', 9206.18, 1);
insert into accounts (id, user_id, account_name, balance, account_type) values (32, 32, 'Computers', 76926.51, 1);
insert into accounts (id, user_id, account_name, balance, account_type) values (33, 33, 'Music', 13101.66, 1);
insert into accounts (id, user_id, account_name, balance, account_type) values (34, 34, 'Computers', 22388.05, 1);
insert into accounts (id, user_id, account_name, balance, account_type) values (35, 35, 'Outdoors', 61871.27, 2);
insert into accounts (id, user_id, account_name, balance, account_type) values (36, 36, 'Jewelry', 61755.2, 1);
insert into accounts (id, user_id, account_name, balance, account_type) values (37, 37, 'Computers', 96362.57, 2);
insert into accounts (id, user_id, account_name, balance, account_type) values (38, 38, 'Books', 90933.06, 1);
insert into accounts (id, user_id, account_name, balance, account_type) values (39, 39, 'Grocery', 66412.71, 2);
insert into accounts (id, user_id, account_name, balance, account_type) values (40, 40, 'Sports', 37869.09, 2);
insert into accounts (id, user_id, account_name, balance, account_type) values (41, 41, 'Tools', 62970.21, 2);
insert into accounts (id, user_id, account_name, balance, account_type) values (42, 42, 'Movies', 57897.84, 2);
insert into accounts (id, user_id, account_name, balance, account_type) values (43, 43, 'Home', 23867.34, 1);
insert into accounts (id, user_id, account_name, balance, account_type) values (44, 44, 'Health', 96911.33, 1);
insert into accounts (id, user_id, account_name, balance, account_type) values (45, 45, 'Automotive', 75281.01, 1);
insert into accounts (id, user_id, account_name, balance, account_type) values (46, 46, 'Clothing', 56883.49, 1);
insert into accounts (id, user_id, account_name, balance, account_type) values (47, 47, 'Books', 43361.85, 2);
insert into accounts (id, user_id, account_name, balance, account_type) values (48, 48, 'Shoes', 39526.71, 2);
insert into accounts (id, user_id, account_name, balance, account_type) values (49, 49, 'Sports', 84466.02, 1);
insert into accounts (id, user_id, account_name, balance, account_type) values (50, 50, 'Industrial', 93813.38, 1);











