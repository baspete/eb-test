'use strict';
const express = require('express'),
	serveStatic = require('serve-static');

const app = express();

app.set('port', process.env.PORT || 3001);

// ========================================================================
// STATIC ASSETS
// serveStatic() here will cache these static assets in memory so we don't
// read them from the filesystem for each request.
// http://expressjs.com/en/advanced/best-practice-performance.html
app.use('/', serveStatic('client/build'));

// ========================================================================
// API PROXY
app.get('/api/hello', (req, res) => {
	res.json({
		message: 'Hello From Express'
	});
});

// ========================================================================
// START THE SERVER
app.listen(app.get('port'), () => {
	console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});
