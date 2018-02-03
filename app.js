'use strict';
const appname = 'DMRO Test App',
  express = require('express'),
  serveStatic = require('serve-static'),
  proxy = require('express-request-proxy');

const apiHost = 'https://zombo.com/api/v1';

const app = express();

// ========================================================================
// STATIC ASSETS
// serveStatic() here will cache these static assets in memory so we don't
// read them from the filesystem for each request.
// http://expressjs.com/en/advanced/best-practice-performance.html
app.use('/', serveStatic('build'));

// ========================================================================
// REALTIME

app.use('/api/*', (req, res, next) => {
  proxy({
    url: apiHost + '/*'
  })(req, res, next);
});

// ========================================================================
// START THE SERVER
const port = process.env.PORT || 3000;
app.listen(port);

console.log(appname + ' started on port ' + port);
