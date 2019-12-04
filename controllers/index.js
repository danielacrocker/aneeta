module.exports.controller = (app) => {
  // get homepage
  app.get('/', (req, res) => {
    res.render('users', { title: 'Users' });
  })
}