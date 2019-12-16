const express = require('express');
const routes  = express.Router();

const userResource = require('./resources/UserResource');
//app.use
// Accounts

//listALL
routes.get('/users',userResource.index);
//GetByEmailAndPassword
routes.get('/users/login/:email?:id',userResource.getLogin);
//findBYID
routes.get('/users/:id', userResource.show);
//add
routes.post('/users',userResource.store);
//update
routes.put("/users/:id",userResource.update);
//delete
routes.delete("/users/:id",userResource.destroy);



module.exports = routes;