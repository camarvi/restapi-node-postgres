CREATE DATABASE firstapi;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    email TEXT
);

INSERT INTO users(name, email) VALUES
    ('joe', 'joe@ibm.com'),
    ('mary', 'mary@yahoo.com'),
    ('ryan', 'ryab@fmtp.net');