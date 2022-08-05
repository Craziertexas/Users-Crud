var users = [];

function GetUsers() {
    return new Promise((resolve, reject) => {
        try {
            resolve(users);
        } catch (err) {
            reject(err);
        }
    });
}

function GetUsersById(Id) {
    return new Promise((resolve, reject) => {
        try {
            var user = users.find((x) => x.id == Id);
            resolve(user);
        }catch(err){
            reject(err);
        }
    });
}

function CreateUsers(NewUser) {
    return new Promise((resolve, reject) => {
        try {
            users = users.concat(NewUser);
            resolve(NewUser);
        } catch (err) {
            reject(err);
        }

    });
}

function UpdateUsersById(User, Id) {
    return new Promise((resolve, reject) => {
        try {
            var UserIndex = users.findIndex((x) => x.id == Id);
            if (UserIndex > -1) {
                users[UserIndex] = User;
                resolve(User);
            } else {
                resolve(undefined);
            }
        } catch(err) {
            reject(err);
        }
    });
}

function DeleteUsersById(Id) {
    return new Promise((resolve, reject) => {
        try {
            var UserIndex = users.findIndex((x) => x.id == Id);
            if (UserIndex > -1) {
                users.splice(UserIndex, 1);
                resolve("OK");
            } else {
                resolve(undefined)
            } 
        } catch (err) {
            reject(err);
        }
    });
}

module.exports = {GetUsers, GetUsersById ,CreateUsers, UpdateUsersById, DeleteUsersById}