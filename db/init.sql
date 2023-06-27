select 'create database millenialdb'
where not exists(select from pg_database where datname = "millenialdb")