drop table if exists article;

create table if not exists article(
    id int not null auto_increment primary key,
    type varchar(100) not null,
    content LONGTEXT not null,
    createTime TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '数据插入时间'
);

-- DEFAULT CHARACTER SET=utf8 COLLATE=utf8_general_ci;
