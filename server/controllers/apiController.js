const db = require('../models/models');
const apiController = {};

apiController.getPosts = (req, res, next) => {

   const queryAll = 'SELECT * FROM question';
    db.query(queryAll, (err, dbResponse) => {
        if(err) {
          next({
            log: 'ERROR: apiController.getTopic',
            message: { err: err.message }
          });
        }

        res.locals.posts = dbResponse.rows;
        return next();
    });
};
    
module.exports = apiController;
