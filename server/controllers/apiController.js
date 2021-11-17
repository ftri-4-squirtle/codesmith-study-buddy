const db = require('../models/models');
const apiController = {};


//---getPosts---//
apiController.getPosts = (req, res, next) => {

   const queryAll = 'SELECT * FROM post';
    db.query(queryAll, (err, dbResponse) => {
        if(err) {
          next({
            log: 'ERROR: apiController.getPosts',
            message: { err: err.message }
          });
        }

        res.locals.posts = dbResponse.rows;
        return next();
    });
};

//---createPost---//
apiController.addPost = (req, res, next) => {
    console.log('Body', req.body);
    //desctructure req body
    const { title, content, company, difficulty, topic, user } = req.body;
    // write info to post table
    const query1 = {
        text: `INSERT INTO question (title, content, difficulty) VALUES ($1, $2, $3);`,
        values: [title, content, difficulty],
      };
     
      db.query(query1)
      .then(dbres => {
        console.log(dbres)
        return next();
      })
      .catch(err => next({
        log: `apiController.addPost: ERROR: ${err.message}`,
        message: { err: 'apiController.addPost: ERROR: Check server logs for details' }
      }))
   
    
    // create a new entry in the company table if necessary
    // write to question_company table
    // write to question_topic table
    //commit transaction
}
    
module.exports = apiController;
