const express = require('express');
const {PORT, DB_SYNC} = require('./config/serverConfig');
const apiRoutes = require('./routes/index');
const db = require('./models/index');

const app = express();

const setupAndStartServer = async () => {

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    
    if (DB_SYNC) db.sequelize.sync({alter: true});

    app.use('/api', apiRoutes);

    app.listen(PORT, () => {
        console.log("Server started on port: ", PORT);
    })
};

setupAndStartServer();