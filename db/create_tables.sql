CREATE TABLE question (
  "_id" serial PRIMARY KEY,
  "title" varchar(180) NOT NULL,
  "content" varchar NOT NULL,
  "date" date NOT NULL DEFAULT NOW(),
  "difficulty" varchar(20) NOT NULL,
  "company_id" bigint,
  "topic_id" bigint
)

-- TO DO: CREATE OTHER ENTITIES AND WIRE FKs --

INSERT INTO question (title, content, difficulty)
VALUES ('How to improve you and colleagues lives?', 'Say your company gives you one week you can use to improve your and your colleagues lives: how would you use that week?', 'medium');

INSERT INTO question (title, content, difficulty)
VALUES ('Explain Unicode and DB transactions', 'Explain Unicode and database transactions to a 5 year old child.', 'hard');

INSERT INTO question (title, content, difficulty)
VALUES ('Some madeup title?', 'How would you approach fixing browser-specific styling issues?', 'hard')