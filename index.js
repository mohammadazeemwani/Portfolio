// my express app to host my portfolio and blog and projects
const express = require('express');
const myWorkRoutes = require('./routes/myWork');
const {myWorkProject, MongooseConnection} = require('./database')

MongooseConnection();

const app = express();
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/myProfile/index.html');
});

app.use('/myWork', myWorkRoutes);

app.listen(3000, () => console.log('running on port 3000'));