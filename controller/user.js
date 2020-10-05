/*
 * @Copyright ParanoiA
 * @Created: 10/4/20, 12:18 PM
 * @Date : 2020.
 * @author : M.ALi Kheiry
 *
 *     /\_/\
 *   =( °w° )=       Meow
 *     )   (  //
 *    (__ __)//
 */


exports.logout = function (req, res, next) {
	req.logout();
	res.redirect('/');
}
