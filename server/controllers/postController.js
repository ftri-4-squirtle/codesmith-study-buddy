const db = require('../models/models');

const postsController = {};

//---getPosts---//
postsController.getPosts = (req, res, next) => {
  // get the question_id with company_name (SELECT question_id, title, content, date, difficulty, company_name FROM question LEFT JOIN company ON question.company_id = company.company_id;
  // get the company_name
  // get the topics
   const queryAll = 'SELECT * FROM question';
    db.query(queryAll, (err, dbResponse) => {
        if(err) {
          next({
            log: 'ERROR: postsController.getPosts',
            message: { err: err.message }
          });
        }
        
        res.locals.posts = dbResponse.rows;
        return next();
    });
};

//---createPost---//
postsController.addPost = async (req, res, next) => {
    //desctructure req body
    const { title, content, company, difficulty, topics, user } = req.body;
    // write info to post table

    const companyQuery = { text: "SELECT company_id FROM company WHERE company_name=$1;", values: [company]};
    let companyRes = await db.query(companyQuery);
    
    // if company does not exist in DB, insert
    if (companyRes.rows.length < 1) {
      const insertCompanyQuery = {text: "INSERT INTO company (company_name) VALUES ($1) RETURNING company_id;", values: [company]};
      companyRes = await db.query(insertCompanyQuery);
    } 

    const companyId = companyRes.rows[0]["company_id"]; 
    
    // insert the question into the db
    const insertQuestionQuery = {
      text: `INSERT INTO question (title, content, difficulty, company_id) VALUES ($1, $2, $3, $4) RETURNING question_id;`,
      values: [title, content, difficulty, companyId],
    };
    const questionRes = await db.query(insertQuestionQuery);
    const questionId = questionRes.rows[0]["question_id"];
    
    // insert into the question topic table
    for(let i = 0; i < topics?.length; i++){
      const insertQuestionTopicQuery = {
        text: 'INSERT INTO question_topic (question_id, topic_id) VALUES ($1, (SELECT topic_id FROM topic where topic_name=$2))',
        values: [questionId, topics[i]]
      }
      const questionTopicRes = await db.query(insertQuestionQuery);
    }
    
    return next();
}
    
module.exports = postsController;
