DROP DATABASE IF EXISTS kmap;

CREATE DATABASE kmap;

USE kmap;
-- Create table layout

CREATE TABLE Course (
	courseID int unsigned PRIMARY KEY,
    title varchar(100) not null,
    date date not null, -- date or datetime?
    location enum("Belfast", "Derry", "Dublin", "London", "Gdansk", "Amsterdam", "Boston", "Frankfurt"),
    description varchar(300) not null,
    info varchar(200) not null
);

ALTER TABLE Course
ADD CONSTRAINT minTitleLength CHECK (LENGTH(title) > 0);


ALTER TABLE Course
ADD CONSTRAINT minDescLength CHECK (LENGTH(description) > 0);

ALTER TABLE Course
ADD CONSTRAINT minInfoLength CHECK (LENGTH(title) > 0);

CREATE TABLE User(
	userID int unsigned PRIMARY KEY,
	name varchar(30) not null,
	email varchar(254) not null
);

ALTER TABLE User
ADD CONSTRAINT minNameLength CHECK (LENGTH(name) > 0);

ALTER TABLE User
ADD CONSTRAINT emailRegex CHECK (REGEXP_LIKE(email, '%[@]{1}%[.]{1}%'));


CREATE TABLE UserCourse(
	courseID int unsigned,
    userID int unsigned,
    signup date default CURRENT_TIMESTAMP,
    role enum("trainer", "trainee"),
    foreign key (courseID) references Course(courseID),
    foreign key (userID) references User(userID)
);

-- Add course



-- Add users


-- add users to course
    
