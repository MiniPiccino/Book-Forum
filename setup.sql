
-- make sure the websiteuser account is set up and has the correct privileges
CREATE USER IF NOT EXISTS websiteuser IDENTIFIED BY 'websitepassword';
GRANT INSERT, SELECT, UPDATE, DELETE ON website.* TO websiteuser;

DROP TABLE IF EXISTS accounts;

CREATE TABLE IF NOT EXISTS users (
  username VARCHAR(25) NOT NULL PRIMARY KEY,
  password VARCHAR(70) NOT NULL
);

INSERT INTO accounts(user, pass)
	VALUES("doej", "$2b$10$gL33obKAFUT5DK3pEbh72OIHztsWBniBBh.PdeKOrF1yr5KFAsdZO");

CREATE TABLE IF NOT EXISTS newForum (
    IDForum INT(100) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(25) NOT NULL,
    nameOfForum VARCHAR(70) NOT NULL,
    summary VARCHAR(100) NOT NULL,
    description VARCHAR(500) NOT NULL,
    added datetime,
    avatar VARCHAR(100),
    FOREIGN KEY (username) REFERENCES users(username)
);

CREATE TABLE IF NOT EXISTS newComment (
    IDComment INT(100) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    IDForum INT(100) UNSIGNED NOT NULL,
    username VARCHAR(25) NOT NULL,
    comment VARCHAR(255) NOT NULL,
    added datetime,
    FOREIGN KEY (IDForum) REFERENCES newForum(IDForum)
);