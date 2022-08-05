function GetHomePage(req, res, next) {
    return new Promise((resolve, reject) => {
      try {
        resolve(res.send("Users Api by: Craziertexas"));
      } catch (error) {
        reject(res.status(500).send("Internal Server Error"));
      }
    });
  }
  
  module.exports = { GetHomePage };
  