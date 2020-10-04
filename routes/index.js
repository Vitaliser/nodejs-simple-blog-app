/*
 * @Copyright ParanoiA
 * @Created: 10/4/20, 11:22 AM
 * @Date : 2020.
 * @author : M.ALi Kheiry
 *
 *     /\_/\
 *   =( °w° )=       Meow
 *     )   (  //
 *    (__ __)//
 */

const express = require('express');
const router = express.Router();

let landing = require('../controller/landing');
let {oidc} = require('../middleware/hasAuth');

// Fetch requested route

router.get('/', landing.get_landing);
router.get('/admin', oidc.ensureAuthenticated(), landing.get_admin);

module.exports = router;