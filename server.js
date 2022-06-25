const express = require('express')

const connectDB = require('./config/db')

const app = express();

connectDB();

app.use(express.json());

app.get('/', (req,res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;

app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/test', require('./routes/api/test'));

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));
