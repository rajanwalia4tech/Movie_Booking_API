const movieController = require('../controllers/movie.controller');
const movieMiddlewares = require('../middlewares/movie.middlewares');
const authMiddlewares = require('../middlewares/auth.middlewares');

const routes = (app) => {
    // routes function takes express app object as parameter

    // CREATE
    app.post(
        '/api/movies', 
        authMiddlewares.isAuthenticated,
        authMiddlewares.isAdminOrClient,
        movieMiddlewares.validateMovieCreateRequest,
        movieController.createMovie
    );

    // DELETE
    app.delete(
        '/api/movies/:id',
        authMiddlewares.isAuthenticated,
        authMiddlewares.isAdminOrClient,
        movieController.deleteMovie
    );

    // READ
    app.get(
        '/api/movies/:id',
        movieController.getMovie
    );

    // READ
    app.put(
        '/api/movies/:id',
        authMiddlewares.isAuthenticated,
        authMiddlewares.isAdminOrClient,
        movieController.updateMovie
    );

    // UPDATE
    app.patch(
        '/api/movies/:id',
        authMiddlewares.isAuthenticated,
        authMiddlewares.isAdminOrClient,
        movieController.updateMovie
    );

    // UPDATE
    app.get(
        '/api/movies',
        movieController.getMovies
    );
}

module.exports = routes;