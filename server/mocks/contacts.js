var data = require('../data/contacts');

var getNextId = () => data.length + 1;
var isValidContact = (contact) => contact.name !== undefined;

module.exports = function (app) {
  app.get('/api/contacts', function (req, res) {
    res.json(data);
  });

  app.get('/api/contacts/:id', function (req, res) {
    var contact = data.find(contact => contact.id == req.params.id);
    contact ? res.json(contact) : res.status(404).json({ error: 'contact not found' });
  });

  app.put('/api/contacts/:id', function (req, res) {
    var contact = data.find(contact => contact.id == req.params.id);
    if (contact) {
      Object.assign(contact, req.body);
      res.json(contact);
    } else {
      res.status(404).json({ error: 'contact not found' });
    }
  });

  app.post('/api/contacts', function (req, res) {
    if (isValidContact(req.body)) {
      req.body.id = getNextId();
      data.push(req.body);
      res.json(req.body);
    }
    else {
      res.status(404).json({ error: 'invalid structure' });
    }
  });
};