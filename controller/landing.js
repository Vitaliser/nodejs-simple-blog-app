/*
 * @Copyright ParanoiA
 * @Created: 10/4/20, 11:29 AM
 * @Date : 2020.
 * @author : M.ALi Kheiry
 *
 *     /\_/\
 *   =( °w° )=       Meow
 *     )   (  //
 *    (__ __)//
 */

exports.get_landing = function (req, res, next) {
	res.send('<h1>Welcome!!</h1><a href="/login">Login</a>');
}

exports.get_admin=function (req,res,next){
	res.send('<h1>Admin Page</h1>');
}