CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` text,
  `email` text,
  `password` text,
  PRIMARY KEY (id)
);

CREATE TABLE `informations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` text,
  `address` text,
  `phone` text,
  `user_id` int,
  PRIMARY KEY (id)
);

CREATE TABLE `tasks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` text,
  `description` text,
  `status` boolean,
  `user_id` int,
  PRIMARY KEY (id)
);

ALTER TABLE `tasks` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `informations` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
