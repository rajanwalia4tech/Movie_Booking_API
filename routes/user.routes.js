const userController = require('../controllers/user.controller');
const userMiddleware = require('../middlewares/user.middlewares');
const authMiddleware = require('../middlewares/auth.middlewares');

const route = (app) => {
    app.patch(
        '/api/user/:id',
        authMiddleware.isAuthenticated,
        userMiddleware.validateUpdateUserRequest,
        authMiddleware.isAdmin,
        userController.update
    )
}

module.exports = route;