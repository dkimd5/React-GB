const express = require('express');
const app = express();

const path = require('path');

const port = process.env.PORT || 3001;

// const csp = "default-src *; style-src * 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' http://www.google.com"

// , {
//   setHeaders: function (res, path) {
//     res.set('Content-Security-Policy', csp)
//   },
// }

if (process.env.NODE_ENV === "production") {
  app.use(express.static('build'));
  app.get('*', (req, res) => {
    req.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  })
}

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log('Server running on port: ', port);
})

