const theatreController = require('../controllers/theatre.controller');
const theatreMiddleware = require('../middlewares/theatre.middleware');
const authMiddleware = require('../middlewares/auth.middlewares');

const routes = (app) => {
    // routes function takes express app object as parameter

    // CREATE
    app.post(
        '/api/theatres',
        authMiddleware.isAuthenticated,
        authMiddleware.isAdminOrClient,
        theatreMiddleware.validateTheatreCreateRequest,
        theatreController.create
    );

    // DELETE
    app.delete(
        '/api/theatres/:id',
        authMiddleware.isAuthenticated,
        authMiddleware.isAdminOrClient,
        theatreController.destroy
    );

    // READ
    app.get(
        '/api/theatres/:id',
        theatreController.getTheatre
    );

    // READ
    app.get(
        '/api/theatres',
        theatreController.getTheatres
    );

    // UPDATE
    app.patch(
        '/api/theatres/:id',
        authMiddleware.isAuthenticated,
        authMiddleware.isAdminOrClient,
        theatreController.update
    );

    // UPDATE
    app.put(
        '/api/theatres/:id',
        authMiddleware.isAuthenticated,
        authMiddleware.isAdminOrClient,
        theatreController.update
    );

    app.patch(
        '/api/theatres/:id/movies',
        theatreMiddleware.validateUpdateMoviesRequest,
        theatreController.updateMovies
    );

    app.get(
        '/api/theatres/:id/movies',
        theatreController.getMovies
    )

    app.get(
        '/api/theatres/:theatreId/movies/:movieId',
        theatreController.checkMovie
    );
}

module.exports = routes;