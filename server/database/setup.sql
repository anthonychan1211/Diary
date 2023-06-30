DROP TABLE IF EXISTS diary_entries;
DROP TABLE IF EXISTS token;
DROP TABLE IF EXISTS users;

CREATE TABLE diary_entries (
    entry_id INT GENERATED ALWAYS AS IDENTITY,
    content VARCHAR NOT NULL,
    category VARCHAR (50) NOT NULL,
    date_time_entry TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL ,
    PRIMARY KEY (diary_id)
);

INSERT INTO diary_entries (content, category) VALUES 
('This is a good day', 'diary'),
('This is a bad day','diary'),
('This is a note.','note')

CREATE TABLE users(
    user_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    pass_word VARCHAR(100) NOT NULL
);

INSERT INTO users(username, pass_word)
VALUES
    ('Achan15','$2y$10$097V6YXFoRutj1O42zr1XO2gRXOowekCFpzDewuCvQn8KRrbxVAhO'),
    ('Salim1704', '$2y$10$kPwQ5gxsZU3m6K8qptJLA.N0yPT9olUWsKTTZdIElTXkTvwDN1Fly'),
    ('Msamin000', '$2y$10$oPHQ4euAqhl6GpmjQ2To1eQXxAnn4upjLT4t9P0sZbRdo2AoEf2B2');

CREATE TABLE token (
    token_id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT NOT NULL,
    token CHAR(36) UNIQUE NOT NULL,
    PRIMARY KEY (token_id),
    FOREIGN KEY (user_id) REFERENCES users("user_id")
);
