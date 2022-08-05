const SchemaValidator = require('jsonschema');
const UserSchema = require('../schema/userSchema.json');
const JsonUtils = require('../utils/jsonUtils');

function GetUsers(req, res, next) {
  return new Promise(async (resolve, reject) => {
    try {

      JsonUtils.GetUsers()
      .then(Response => resolve(res.status(200).json(Response)))
      .catch(error => reject(res.status(500).send("Internal Server Error")));

    } catch (error) {
      reject(res.status(500).send("Internal Server Error"));
    }
  });
}

function GetUsersById(req, res, next) {
  return new Promise((resolve, reject) => {
    try {
      if (!isNaN(req.params.userId)) {

        var Id = req.params.userId;
        JsonUtils.GetUsersById(Id)
        .then(Response => {
          if (Response) {
            resolve(res.status(200).json(Response))
          } else {
            resolve(res.status(404).send("User not found"));
          }
        })
        .catch(err => reject(res.status(500).send("Internal Server Error")));

      } else {
        resolve(res.status(400).send("Invalid user id"));
      }
    } catch (error) {
      reject(res.status(500).send("Internal Server Error"));
    }
  });
}

function CreateUsers(req, res, next) {
  return new Promise((resolve, reject) => {
    try {
      if (SchemaValidator.validate(req.body, UserSchema).valid) {

        JsonUtils.CreateUsers(req.body)
        .then((Response) => resolve(res.status(201).json(Response)))
        .catch(error => reject(error));

      } else {
        resolve(res.status(405).send("Invalid input"));
      }
    } catch (error) {
      reject(res.status(500).send("Internal Server Error"));
    }
  });
}

function UpdateUsersById(req, res, next) {
  return new Promise((resolve, reject) => {
    try {
      
      if (!isNaN(req.params.userId) && SchemaValidator.validate(req.body, UserSchema).valid) {

        JsonUtils.UpdateUsersById(req.body, req.params.userId)
        .then((Response) => {
          if (Response) {
            resolve(res.status(200).json(Response))
          } else {
            resolve(res.status(404).send("User not found"));
          }
        })
        .catch((error) => reject(res.status(500).send("Internal Server Error")));

      } else {
        resolve(res.status(400).json("Invalid user id"));
      }
    } catch (error) {
      reject(res.status(500).send("Internal Server Error"));
    }
  });
}

function DeleteUsersById(req, res, next) {
  return new Promise((resolve, reject) => {
    try {
      if (!isNaN(req.params.userId)) {

        var Id = req.params.userId;
        JsonUtils.DeleteUsersById(Id)
        .then((Response) => {
          if (Response) {
            resolve(res.status(200).json(Response));
          } else {
            resolve(res.status(404).send("User not found"));
          }
        })
        .catch(error => reject(res.status(500).send("Internal Server Error")));
        
      } else {
        resolve(res.status(400).send("Invalid user id"));
      }
    } catch (error) {
      reject(res.status(500).send("Internal Server Error"));
    }
  });
}

module.exports = { GetUsers, CreateUsers, GetUsersById, UpdateUsersById, DeleteUsersById};
