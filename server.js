const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/auth');
const sequelize = require('./config');
const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3001;

//connect-session-sequelize sets up a session store table in the database, to replace in-memory storage
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//session configuration object, refer to express-session documentation to modify configs
const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

//apply session middleware
app.use(session(sess));
//create handlebars instance and add custom helper functions
const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//body parsing, url encoding, and static path middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//apply routing middleware
app.use(routes);

//turn on connection to db and server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  sequelize.sync({ force: false });
});
