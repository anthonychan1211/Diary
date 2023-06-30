DROP TABLE IF EXISTS theatre_plays;
DROP TABLE IF EXISTS users;

CREATE TABLE theatre_plays(
    play_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    play_name VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    date_time_played TIMESTAMPTZ NOT NULL,
    duration INT NOT NULL,
    cover_photo VARCHAR(200) NOT NULL,
    actor_list TEXT NOT NULL,
    synopsis TEXT NOT NULL 
);


INSERT INTO theatre_plays(play_name, price, date_time_played, duration, cover_photo, actor_list, synopsis)
VALUES  

    ('Romeo and Juliet', 2500, '2023-06-29 09:30:00+00:00', 120, 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Romeo_%26_Juliet_%283640665883%29.jpg', 'Tom Hiddleston (Romeo), Emma Watson (Juliet), Ian McKellen (Friar Laurence), Dev Patel (Mercutio), Meryl Streep (Nurse), Idris Elba (Tybalt), Liam Neeson (Capulet), Cate Blanchett (Lady Capulet)', 'A timeless love story by William Shakespeare set in Verona. Two young lovers, Romeo Montague and Juliet Capulet, find themselves caught in the crossfire of their feuding families. Despite their love''s purity, their secretive romance tragically spirals into a sequence of events leading to heartbreaking sacrifice.'),
    ('Hamlet', 3050, '2023-06-30 14:45:00+00:00', 150, 'https://d3s3zh7icgjwgd.cloudfront.net/AcuCustom/Sitename/DAM/233/3_Standard.-Hamlet.-George-Fouracres-as-Hamlet-front-Polly-Frame-a.jpg', 'Benedict Cumberbatch (Hamlet), Gary Oldman (Claudius), Nicole Kidman (Gertrude), Bill Nighy (Polonius), Saoirse Ronan (Ophelia), John Boyega (Laertes), Chadwick Boseman (Horatio), Patrick Stewart (Ghost of Hamlet''s Father)', 'This Shakespearean tragedy follows Hamlet, the prince of Denmark, tormented by his father''s ghost''s revelation that he was murdered by his own brother, Claudius. It''s a profound exploration of revenge, madness, death, and the human condition, highlighting Hamlet''s philosophical existential crisis amid his quest for justice.'),
    ('The Importance of Being Earnest', 2000, '2023-07-01 18:20:00+00:00', 135, 'https://upload.wikimedia.org/wikipedia/commons/c/c0/The_Importance_of_Being_Earnest_%2815424263443%29.jpg', 'Hugh Jackman (Jack Worthing), Chris Hemsworth (Algernon Moncrieff), Keira Knightley (Gwendolen Fairfax), Margot Robbie (Cecily Cardew), Judi Dench (Lady Bracknell), Helen Mirren (Miss Prism)', 'Oscar Wilde''s comedic masterpiece satirizes Victorian society''s hypocrisies. The plot weaves around two bachelors, Jack and Algernon, who create fictitious personas to escape burdensome social obligations. Their plans unravel amidst romance, lost identities, and biting wit, leading to a farcically entertaining unraveling of truth.' ),
    ('A Midsummer Night''s Dream', 2200, '2023-07-02 10:00:00+00:00', 140, 'https://ichef.bbci.co.uk/images/ic/1200xn/p0dtpyrj.jpg', 'Johnny Depp (Puck), Chris Pine (Oberon), Natalie Portman (Titania), Zoe Kravitz (Hermia), Emily Blunt (Helena), Chris Pratt (Lysander), Michael B. Jordan (Demetrius), Simon Pegg (Bottom)', 'In this whimsical play by Shakespeare, human and fairy worlds comically intersect in a magical Athenian forest. The narrative entangles love-struck mortals, mischievous fairies, and amateur actors, revealing themes of love, chaos, and magic. Its series of confusions and transformations end in reconciliation and marriage.'),
    ('Macbeth', 2875, '2023-07-03 21:15:00+00:00', 130, 'https://www.indiewire.com/wp-content/uploads/2015/05/macbeth.jpg?w=685&h=478&crop=1', 'Daniel Day-Lewis (Macbeth), Kate Winslet (Lady Macbeth), Chiwetel Ejiofor (Banquo), Tom Hardy (Macduff), Anthony Hopkins (King Duncan), Tilda Swinton (First Witch), Helena Bonham Carter (Second Witch), Frances McDormand (Third Witch)','Another of Shakespeare''s tragedies, Macbeth depicts the dark journey of a noble Scottish general who, driven by prophecy and his wife''s manipulation, murders King Duncan to seize the throne. His reign, however, descends into guilt-ridden tyranny, paranoia, and madness, emphasizing themes of ambition, power, and moral corruption.' );


CREATE TABLE users(
    user_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    pass_word VARCHAR(100) NOT NULL,
    isAdmin BOOLEAN DEFAULT false
);

INSERT INTO users(username, pass_word, isAdmin)
VALUES
    ('Achan15','$2y$10$097V6YXFoRutj1O42zr1XO2gRXOowekCFpzDewuCvQn8KRrbxVAhO',true),
    ('Salim1704', '$2y$10$kPwQ5gxsZU3m6K8qptJLA.N0yPT9olUWsKTTZdIElTXkTvwDN1Fly', true),
    ('Msamin000', '$2y$10$oPHQ4euAqhl6GpmjQ2To1eQXxAnn4upjLT4t9P0sZbRdo2AoEf2B2', false);
