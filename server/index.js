var serveContacts = require('./mocks/contacts');
var bodyParser = require('body-parser');

module.exports = function (app) {
  app.use(bodyParser.json());
  serveContacts(app);
};