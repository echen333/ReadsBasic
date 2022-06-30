const express = require('express')

const connectDB = require('./config/db')
const passport = require('passport');
const session = require('express-session')
const cookieParser = require('cookie-parser');
// const cookieSession = require('cookie-session')
const MongoStore = require('connect-mongo')(session);
const app = express();
const config = require('config');

require('./config/passport-setup');

connectDB();



app.use(express.static("public"));

app.set('trust proxy', 1);

app.use(
    session({
        name: 'session',
        secret: "cats",
        keys: ['key1', 'key2'],
        // saveUninitialized: true,
        // resave: true,
        // store: new MongoStore({ mongooseConnection: mongoose.connection }),
        cookie: {
            // secure: true,
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000 * 7
        }
    })
);

app.use(express.json( { extended: false } ));

app.use(cookieParser("cats"));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req,res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;

app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/test', require('./routes/api/test'));
app.use('/api/article', require('./routes/api/article'));
app.use('/api/auth', require('./routes/api/auth'));

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));
