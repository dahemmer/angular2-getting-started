var serveContacts = require('./mocks/contacts');

module.exports = function(app) {
  serveContacts(app);
};