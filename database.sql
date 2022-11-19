
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);


CREATE TABLE "categories" (
	"id" serial PRIMARY KEY,
	"name" VARCHAR(255) NOT NULL
);

CREATE TABLE "supplies" (
	"id" serial PRIMARY KEY,
	"user_id" INT REFERENCES "user",
	"categories_id" INT REFERENCES "categories",
	"color" varchar(255),
	"name" varchar(255) NOT NULL,
	"product_details" varchar(255) NOT NULL,
	"notes" varchar(255),
	"scraps" BOOLEAN DEFAULT FALSE,
	"quantity" VARCHAR,
	"image" VARCHAR(255)
);



CREATE TABLE "resources" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "users",
	"categories_id" INT REFERENCES "categories",
	"website" varchar(255) NOT NULL,
	"description" varchar(255) NOT NULL
);



-- TEST DATA
INSERT INTO "supplies"
("user_id", "categories_id", "color", "name", "product_details", "notes", "quantity", "image")
VALUES
(4, 1, 'orange', 'yarn', 'Weight: Medium (4)
Contents: 100% acrylic
Skein Weight: 7 oz. / 198 g
Yardage: 354 yd. / 324 m

Knitting Gauge: 17 sts - 23 rows = 4" (10 cm)', 'Vicoria loves this color', '354/yd', 'https://imgs.michaels.com/MAM/assets/1/5E3C12034D34434F8A9BAAFDDF0F8E1B/img/9F7AC795CB2948FEB95565E6234C4A97/10626718_1.jpg?fit=inside|540:540'),
(4, 1, 'red', 'yarn', 'Weight: Medium (4)

Contents: 100% acrylic
Skein Weight: 7 oz. / 198 g
Yardage: 354 yd. / 324 m

Knitting Gauge: 17 sts - 23 rows = 4" (10 cm)', 'This was my favorite color. IDK what to use it for. Just super vibrant', '354/yd', 'https://imgs.michaels.com/MAM/assets/1/5E3C12034D34434F8A9BAAFDDF0F8E1B/img/A8C53B191EF64B76A22E95480F620649/10626712_20.jpg?fit=inside|540:540'), 
(4, 1, 'black', 'regular yarn', 'Weight: Medium (4)

Contents: 100% acrylic
Skein Weight: 7 oz. / 198 g
Yardage: 354 yd. / 324 m

Knitting Gauge: 17 sts - 23 rows = 4" (10 cm)', 'I have to keep black on deck. I literally use this for everything.', '354/yd', 'https://imgs.michaels.com/MAM/assets/1/5E3C12034D34434F8A9BAAFDDF0F8E1B/img/7E3B45B7788B418BA855EB82BD96822D/10166392_20.jpg?fit=inside|540:540' ), 
(4, 2, 'multicolored', 'Grinchmas Fabric', 'Dr Seuss Grinch Merry Grinchmas, How the Grinch Slole Christmas, 100% Quilt Shop Cotton, Fabric by the Yard, Robert Kaufman', 'I could totally make some pajamas with this!', '10/yd', 'https://www.mendedheartsquilting.com/products/merry-grinchmas-green?variant=40264196620484&utm_source=google&utm_medium=cpc&utm_campaign=Google+Shopping&currency=USD'), 
(4, 2, '', 'Sewing Machine Needles', 'The brand kept breaking. I will see how this brand works', 'Needle size: 70/10, 80/12, 90/14
Point/Eye features: Slightly rounded point','10/pack', 'https://cdn-fsly.yottaa.net/551561a7312e580499000a44/www.joann.com/v~4b.109/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw9f232b28/images/hi-res/85/8562266.jpg?sw=556&sh=680&sm=fit&yocs=7r_7x_7C_'), 
(4, 3, '', 'Vinyl Transfer Tape', '1 roll 12" x 48" (30.5 cm x 122 cm)
Specially designed to transfer vinyl cuts to a variety of surfaces with ease
Create removable media covers, labels, decor, and more', 'This should last for a while. I can reuse this', '1 roll', 'https://cdn-fsly.yottaa.net/551561a7312e580499000a44/www.joann.com/v~4b.109/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw845b2fc5/images/hi-res/14/14229116.jpg?sw=556&sh=680&sm=fit&yocs=7r_7x_7C_'),
(4, 3, 'pink', 'Iron-On Vinyl- Activewear', 'Easy to weed and apply, use your household iron or Cricut EasyPress.', 'I know I can use this for something', '11.8 x 24 inches', 'https://www.joann.com/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dwa5c65ed2/images/hi-res/16/16330466_MAIN.jpg?sw=2000&sh=2000&sm=fit'),
(4, 3, 'multicolored', 'Avengers Vinyl', '6 sheets (3 patterns, 2 each) 12" x 12" (30.5 cm x 30.5 cm)
Removes without residue for up to 2 years', 'This was a gift...', '6/sheets', 'https://cdn-fsly.yottaa.net/551561a7312e580499000a44/www.joann.com/v~4b.109/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw3d946635/images/hi-res/alt/16330664ALT1.jpg?sw=556&sh=680&sm=fit&yocs=7r_7x_7C_'), 
(4, 4, 'multicolored', 'Floral Cardstock', 'Park Lane They are perfect for scrapbooks, cards, home decor, handmade gifts, and so much more.', 'Might be nice to use for cards to send in the fall.', '36/sheets', 'https://cdn-fsly.yottaa.net/551561a7312e580499000a44/www.joann.com/v~4b.109/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw657b9d42/images/hi-res/18/18767822.jpg?sw=556&sh=680&sm=fit&yocs=7r_7x_7C_'), 
(4, 4, 'multicolored', 'Glitter Cardstock', 'Park Lane 12x12 inches
Glitter stays on the page - not your projects
Use as-is or make die cut shapes, borders and more!', 'Glitter! I will return this if one speck comes off of the paper', '24/sheets', 'https://cdn-fsly.yottaa.net/551561a7312e580499000a44/www.joann.com/v~4b.109/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw38ee956e/images/hi-res/alt/12148334ALT1.jpg?sw=556&sh=680&sm=fit&yocs=7r_7x_7C_');




