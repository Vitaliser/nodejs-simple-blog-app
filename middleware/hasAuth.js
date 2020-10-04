/*
 * @Copyright ParanoiA
 * @Created: 10/4/20, 12:01 PM
 * @Date : 2020.
 * @author : M.ALi Kheiry
 *
 *     /\_/\
 *   =( °w° )=       Meow
 *     )   (  //
 *    (__ __)//
 */

const {ExpressOIDC} = require('@okta/oidc-middleware');
let createError = require('http-errors');

// Handle oidc configuration
exports.oidc = new ExpressOIDC({
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
