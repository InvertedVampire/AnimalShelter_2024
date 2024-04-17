create table if not exists loginuser(
user_id int not null primary key auto_increment,
user_name varchar(255),
user_pass varchar(255)
)

insert into loginuser(user_name,user_pass) values ("deepesh@gmail.com","pass123")