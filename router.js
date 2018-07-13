var auth=require('./auth/auth.service');

module.exports = function (app) {
    app.use('/api',auth.verifyToken,require('./search'))
    app.use('/',landing);
}
function landing(req,res) {
   res.render('landing')
}
function logOut(req,res) {
    req.logout();
    req.session.destroy(function (err) {
        res.clearCookie('token')
        res.redirect('/'); //Inside a callback… bulletproof!
    });
}