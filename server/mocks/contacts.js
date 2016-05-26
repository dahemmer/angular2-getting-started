var data = require('../data/contacts');

var getNextId = () => data.length;
var isContact = (contact) => contact.name !== undefined;
var isEmailAvailable = (email) => {
  var contact = data.find(contact => contact.email == email);
  return contact ? false : true;
}

module.exports = function (app) {
  app.get('/api/contacts', function (req, res) {
    res.json(data);
  });

  app.post('/api/contacts', function (req, res) {
    if (isContact(req.body)) {
      req.body.id = getNextId();
      data.push(req.body);
      res.json(req.body);
    }
    else {
      res.status(404).json({ error: 'invalid structure' });
    }
  });

  app.get('/api/search', function (req, res) {
    var text = req.query.text;
    var matches = data.filter(contact => contact.name.indexOf(text) > -1);
    res.json(matches);
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

  app.get('/api/check-email', function (req, res) {
    res.json({ available: isEmailAvailable(req.query.email)  })
  });
};