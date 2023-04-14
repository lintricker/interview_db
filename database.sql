
create TABLE category(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255)
);

create TABLE question_type(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255)
);

create TABLE complexity(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255)
);

create TABLE question(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    answer VARCHAR(255),
    category_id INTEGER,
    type_id INTEGER,
    complexity_id INTEGER,
    FOREIGN KEY (category_id) REFERENCES category (id),
    FOREIGN KEY (type_id) REFERENCES question_type (id),
    FOREIGN KEY (complexity_id) REFERENCES complexity (id)
);