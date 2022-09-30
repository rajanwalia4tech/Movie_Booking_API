const authRoutes = require("./auth.routes");
const movieRoutes = require("./movie.routes");
const theatreRoutes = require("./theatre.routes");
const userRoutes = require("./user.routes");

module.exports = (app) => {
    authRoutes(app);
    movieRoutes(app);
    theatreRoutes(app);
    userRoutes(app);
}