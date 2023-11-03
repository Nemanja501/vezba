create posts_tags (id int auto_increment, post_id int not null, tag_id int not null, primary key(id), foreign key(post_id) references posts(id), foreign key(tag_id) references tags(id));
