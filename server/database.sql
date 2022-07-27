CREATE DATABASE fekher;
CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY ,
    description VARCHAR(255),
    nom VARCHAR,
    adresse VARCHAR,
    num INTEGER,
    role VARCHAR,
 );