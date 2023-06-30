DROP TABLE IF EXISTS diary_entries;
DROP TABLE IF EXISTS token;
DROP TABLE IF EXISTS users;

CREATE TABLE users(
    user_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    pass_word VARCHAR(100) NOT NULL
);

INSERT INTO users(username, pass_word)
VALUES
    ('user1','$2b$10$p3TTLkl6X5m1kzr2zg76nulxyy.1fYroAh8jQG4bxNoWPlHqqPwoe'),
    ('user2', '$2b$10$kfENcn6VY9NKPMtBb4khYOlSVeZz7/F2l7ie5tZZVS4iCCaSE4Yyi'),
    ('user3', '$2b$10$utS6/nYs.IcrjKif230Ylus79YhsOmbcDfGCjUstN0pn360qOkXuq');

CREATE TABLE diary_entries (
    entry_id INT GENERATED ALWAYS AS IDENTITY,
    content VARCHAR NOT NULL,
    category VARCHAR (50) NOT NULL,
    date_time_entry TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL ,
    user_id INT REFERENCES users(user_id) NOT NULL,
    PRIMARY KEY (entry_id)
);

INSERT INTO diary_entries (content, category, user_id) VALUES 
('Post by user1', 'diary',1),
('Post by user2','diary',2),
('Post by user3.','note',3);


CREATE TABLE token (
    token_id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT NOT NULL,
    token CHAR(36) UNIQUE NOT NULL,
    PRIMARY KEY (token_id),
    FOREIGN KEY (user_id) REFERENCES users("user_id")
);
