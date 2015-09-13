CREATE TABLE projects (
  id serial PRIMARY KEY, 
  title varchar(40),
  subtitle varchar(40), 
  description text,
  codeURL varchar(40)
);
  
-- links all technologies used to specific projects
CREATE TABLE projects_tech (
  id serial,
  tech varchar(40)
);
  


