CREATE TABLE IF NOT EXISTS projects (
  id INT AUTO_INCREMENT, 
  title varchar(40),
  subtitle varchar(40), 
  dateString varchar(20),
  description text,
  PRIMARY KEY (id)
);
  
-- links all technologies used to specific projects
CREATE TABLE IF NOT EXISTS projects_tech (
  id INT,
  tech varchar(40)
);

TRUNCATE TABLE projects;
TRUNCATE TABLE projects_tech;


-- Insert all relevant projects
INSERT INTO projects (title, subtitle, dateString, description) VALUES
  ('Desktop Miniplayer', 'Grooveshark', 'August 2014', 'Implemented all basic music player functionality while delivering the top requested community feature. Built on node webkit and node.js and tested across multiple OS''s and underwent rigorous code reviews.'),

  ('Blog Redesign', 'Zappos', 'June - July 2015', 'Redesigned and restructured front end for zappos blogs using HTML5 / CSS3 / vanilla javascript. Maintained best web practices and accessibility standards throughout entire project. Improved skills with git for version control and increased knowledge of SEO.'),

  ('OpenSpace', 'MHacks V', 'January 2015', 'Built to serve as an open source alternative to popular website builders such as Weebly or Squarespace. Utilizes Python and Flask to provide an easy to use web interface for creating a website.'),

  ('GitMe', 'MHacks IV', 'September 2014', 'Utilizes the GroupMe and Github APIs to assist development groups and improve productivity. Sends a group message when code is committed, and retrieves statistics about each member''s contributions for the most recent week.'),

  ('Admin Tools', 'Arts At Michigan', 'Fall 2014', 'This was a semester long project, with the goal to make interacting with our work database much easier. I automated a lot of tedious, repetetive processes, which helped increase productivity for myself and other staff.'),

  ('Portfolio Website', 'Personal Project', 'September 2015', 'Originally designed in the summer of 2014, my site now has a clean new look, inspired by Google''s Material Design spec. Built on Python and Flask, and interacts with a PostgreSQL database.');

-- insert all skills for each project
INSERT INTO projects_tech (id, tech) VALUES
  (1, 'Node Webkit'),
  (1, 'Javascript / Node.JS'),
  (1, 'HTML5 / CSS3'),

  (2, 'Javascript'),
  (2, 'HTML5 / Handlebars'),
  (2, 'CSS / SASS'),

  (3, 'Python / Flask'),
  (3, 'HTML5 / CSS3'),
  (3, 'Javascript / JQuery'),
  (3, 'mySQL'),

  (4, 'Node.JS'),
  (4, 'GitHub API'),
  (4, 'GroupMe API'),
  
  (5, 'PHP / mySQL'),
  (5, 'Bootstrap'),
  (5, 'AJAX'),

  (6, 'Python / Flask'),
  (6, 'HTML5 / Jinja2 Templates'),
  (6, 'CSS / SASS'),
  (6, 'Javascript'),
  (6, 'PostgreSQL');

