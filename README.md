
--npm install
run docker instance to generate db
--docker-compose up
run migrations
npm run m:gen -- ./migrations/init
npm run m:run