DROP DATABASE IF EXISTS kmap;

CREATE DATABASE kmap;

USE kmap;
-- Create table layout

CREATE TABLE Course (
	courseID int unsigned PRIMARY KEY auto_increment,
    title varchar(100) not null,
    date date not null,
    location enum("Belfast", "Derry", "Dublin", "London", "Gdansk", "Amsterdam", "Boston", "Frankfurt"),
    description varchar(300) not null,
    info varchar(200) not null,
    maxAtt int unsigned not null
);

ALTER TABLE Course
ADD CONSTRAINT minTitleLength CHECK (LENGTH(title) > 0);


ALTER TABLE Course
ADD CONSTRAINT minDescLength CHECK (LENGTH(description) > 0);

ALTER TABLE Course
ADD CONSTRAINT minInfoLength CHECK (LENGTH(title) > 0);

ALTER TABLE Course
ADD CONSTRAINT minMaxAtt CHECK (maxAtt > 0);

delimiter //

CREATE TRIGGER trig_date_check BEFORE INSERT ON Course
FOR EACH ROW
BEGIN
	IF (NEW.date < CURRENT_DATE()) = 1 THEN
		SET NEW.title = null;
	END IF;
END //

delimiter ;

CREATE TABLE User(
	userID int unsigned PRIMARY KEY auto_increment,
	name varchar(30) not null,
	email varchar(254) not null unique
);

ALTER TABLE User
ADD CONSTRAINT minNameLength CHECK (LENGTH(name) > 0);

delimiter //

CREATE TRIGGER trig_email_check BEFORE INSERT ON User
FOR EACH ROW
BEGIN
	IF (NEW.email REGEXP '^[^@]+[@]{1}[k]{1}[a]{1}[i]{1}[n]{1}[o]{1}[s]{1}[.]{1}[c]{1}[o]{1}[m]{1}$') = 0 THEN
		SET NEW.email = null;
	END IF;
END //


delimiter ;

CREATE TABLE UserCourse(
	courseID int unsigned,
    userID int unsigned,
    signup date,
    role enum("trainer", "trainee"),
    foreign key (courseID) references Course(courseID),
    foreign key (userID) references User(userID)
);

delimiter //

CREATE TRIGGER trig_add_UserCourse BEFORE INSERT ON UserCourse
FOR EACH ROW
BEGIN
	declare maxAtt INT;
    declare count INT;
    SELECT COUNT(1) into count FROM UserCourse WHERE courseID = NEW.courseID and role = "trainee";
    SELECT max(maxAtt) into maxAtt FROM Course WHERE courseID = NEW.courseID;
    if (maxAtt <= count) THEN
		SET NEW.courseID = null;
	end if;
	SET NEW.signup = CURDATE();
END //

delimiter ;

-- View for ammount of attendees in event
CREATE VIEW attendeeCount AS
	SELECT C.courseID as 'courseID', count(*) as 'count'
    FROM Course C JOIN (SELECT courseID, userID
								FROM UserCourse
                                WHERE role = "trainee") UC
								ON C.courseID = UC.courseID
	GROUP BY courseID;
	

-- Add course
INSERT INTO Course (title, date, description, info, maxAtt)
VALUES ("Angular", '2019/7/10', "Angular training course for all levels", "The course is made for everyone", 100),
	("AngularAdv", '2019/9/15', "Take angular further", "The aspired web developer", 10),
    ("Java", '2020/10/6', "The course to take your java to the next level","After noon course, for good java users", 1),
    ("Workday", '2019/11/10', "Course to take people over the basics of workday, and show other features", "For new users to get better understanding in small enviroment", 5),
    ("UX", '2019/10/08', "Learn how to improve your users experience", "Course will run all day", 20);

-- Add users
INSERT INTO User (name, email)
VALUES  ("Will Smith", "willsmith@kainos.com"),
		("John Wick", "johnwick@kainos.com"),
        ("Bill Gates", "billgates@kainos.com"),
        ("Warren Buffett", "warrenbuffett@kainos.com"),
        ("Benjamin Button", "b.button@kainos.com");


-- add users to course
INSERT INTO UserCourse (userId, courseID, role)
VALUES (1,1, "trainee"),
		(2,1, "trainer"),
        (3,2, "trainee"),
        (2,2, "trainee"),
        (4,3, "trainer"),
        (3, 4, "trainer"),
        (5, 1, "trainee"),
        (5,2, "trainer"),
        (5,3, "trainee");
