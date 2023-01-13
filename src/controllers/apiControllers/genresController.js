const db = require("../../database/models");
const sequelize = db.sequelize;

const genresController = {
  list: (req, res) => {
    db.Genre.findAll().then((genres) => {
      let response = {
        status: 200,
        meta: { total: genres.length, 
            url: `${req.protocol}://${req.get("host")}${req.originalUrl}`
        },
        data: genres,
      };
      res.status(200).json(response);
    });
  },
};

module.exports = genresController;
