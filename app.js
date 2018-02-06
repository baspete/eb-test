'use strict';
const express = require('express'),
	serveStatic = require('serve-static');

const app = express();

// ========================================================================
// STATIC ASSETS
// serveStatic() here will cache these static assets in memory so we don't
// read them from the filesystem for each request.
// http://expressjs.com/en/advanced/best-practice-performance.html
app.use('/', serveStatic('client/build'));

// ========================================================================
// START THE SERVER
const port = process.env.PORT || 3000;
app.listen(port);
