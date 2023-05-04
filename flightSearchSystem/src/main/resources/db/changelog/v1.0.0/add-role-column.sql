-- liquibase formatted sql

-- changeSet Danil:2
alter table person add role varchar;
-- rollback alter table person drop column best_score;