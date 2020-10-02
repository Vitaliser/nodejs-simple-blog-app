/*
 * @Copyright ParanoiA
 * @Created: 9/30/20, 1:40 PM
 * @Date : 2020.
 * @author : M.ALi Kheiry
 *
 *     /\_/\
 *   =( °w° )=       Meow
 *     )   (  //
 *    (__ __)//
 */

require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const {ExpressOIDC} = require('@okta/oidc-middleware');
const app = express();
const port = 3000;

// Session support is required to use ExpressOIDC
app.use(session({
	secret: process.env.RANDOM_SECRET_WORD,
	resave: true,
	saveUninitialized: false
}));

const oidc = new ExpressOIDC({
	issuer: `${process.env.OKTA_ORG_URL}/oauth2/default`,
	client_id: process.env.OKTA_CLIENT_ID,
	client_secret: process.env.OKTA_CLIENT_SECRET,
	loginRedirectUri: process.env.REDIRECT_URL,
	appBaseUrl: process.env.APP_BASE_URL,
	scope: 'openid profile',
	routes: {
		callback: {
			path: '/authorization-code/callback',
			defaultRedirect: '/admin'
		}
	}
})

app.use(logger('dev'));

// ExpressOIDC will attach handlers for the /login and /authorization-code/callback routes
app.use(oidc.router);
app.use(cors());
app.use(bodyParser.json());

app.get('/home', (req, res) => {
	res.send('<h1>Welcome!!</div><a href="/login">Login</a>');
});

app.get('/admin', (req, res) =>{
	res.send('Admin page');
});

app.listen(port, () => console.log(`Simple Blog App listening on port ${port}!`))


// catch 404 and forward to error handler
app.use(function (err, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, next) {
	res.locals.message = err.message;
	res.locals.error = req.app.get('dev') === 'development' ? err : {};

	render.status(err.status || 500);
	// res.render('error');
});

module.exports = app;