const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middlewares/auth.middlewares');

const routes = (app) => {
    app.post(
        '/api/auth/signup',
        authMiddleware.validateSignupRequest,
        authController.signup
    );

    app.post(
        '/api/auth/signin',
        authMiddleware.validateSigninRequest,
        authController.signin
    );

    app.patch(
        '/api/auth/reset',
        authMiddleware.isAuthenticated,
        authMiddleware.validateResetPasswordRequest,
        authController.resetPassword
    );
}

module.exports = routes;