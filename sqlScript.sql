DROP DATABASE IF EXISTS kmap;

CREATE DATABASE kmap;

USE kmap;
-- Create table layout

CREATE TABLE Course (
	courseID int unsigned PRIMARY KEY auto_increment,
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
INSERT INTO Course (title, date, description, info)
VALUES ("course 1", 10/7/2019, "This is the first course running", "The course is made for everyone"),
	("course 2", 15/9/2019, "Lots of Angular", "The aspired web developer"),
    ("Java", 30/10/2020, "The course to take your java to the next level","After noon course, for good java users");


-- Add users


-- add users to course
    
