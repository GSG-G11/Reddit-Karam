BEGIN;

DROP TABLE IF EXISTS users, posts, comments, categories, votes CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    image TEXT,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT,
    image TEXT,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    date DATE NOT NULL,
    user_id INT NOT NULL,
    post_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    post_id INT NOT NULL,
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE
);

CREATE TABLE votes (
    id SERIAL PRIMARY KEY,
    vote_status BOOLEAN,
    user_id INT NOT NULL,
    post_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE
);

INSERT INTO users (username, email, password) VALUES (
    'admin',
    'admin@gmail.com',
    '$2b$10$x7XXXMFrMbmQrku.rAxZs.D1tgrynZzqdHmTZiBN40qwyxUtwuGZu'
);

-- Get All Posts Query

-- SELECT 
-- p.id, p.title, p.content, p.image, p.user_id,
-- u.image,
-- (SELECT COUNT(v.id) FROM votes v WHERE (v.vote_status = true AND v.post_id = p.id)) AS up_count,
-- (SELECT COUNT(v.id) FROM votes v WHERE (v.vote_status = false AND v.post_id = p.id)) AS down_count,
-- (SELECT COUNT(c.id) FROM comments c WHERE c.post_id = p.id) AS comments_count

-- FROM 
-- posts p 
-- JOIN users u 
-- ON u.id = p.user_id

-- GROUP BY
-- p.id,
-- u.image,
-- u.username
-- ORDER BY up_count DESC;

COMMIT;