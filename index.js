const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bcrypt = require('bcrypt');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);

const db = require('./data/dbConfig.js');
const Users = require('./models/usersModel.js');


const server = express();


const sessionConfig = {
  name: 'denizen',
  secret: 'a big secret',
  cookie: {
    maxAge: 24 * 60 * 60 * 1000, // 1 day
    secure: false, // for HTTPS
  },
  httpOnly: true, 
  resave: false,
  saveUninitialized: false, // GDPR 

  store: new KnexSessionStore({
    knex: db,
    tablename: 'sessions',
    sidfieldname: 'sid',
    createtable: true,
    clearInterval: 24 * 60 * 60 * 1000, // in ms
  }),
};


server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionConfig));

//ROUTES


server.get('/', (req, res) => {
    res.send("Server works");
  });


  server.post('/api/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 12)
    user.password = hash;
  
    Users.add(user)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
  
  server.post('/api/login', (req, res) => {
    let { username, password } = req.body;
  
    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          req.session.user = user; 
          res
            .status(200)
            .json({ message: `Welcome ${user.username}!` });
        } else {
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
  
  function restricted(req, res, next) {
    if (req.session && req.session.user) {
      next();
    } else {
      res.status(401).json({ message: 'You shall not pass!' });
    }
  }
  
  // axios.get(url, {headers: { username, password }})
  
  server.get('/api/users', restricted, (req, res) => {
    Users.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => res.send(err));
  });

  server.get('/api/logout', restricted, (req, res) => {
    if (req.session) {
      req.session.destroy(err => {
        if (err) {
          res.send('error logging out');
        } else {
          res.send('good bye');
        }
      });
    }
  });  

//SERVER

const port = process.env.PORT || 5220;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));