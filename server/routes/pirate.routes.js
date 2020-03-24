const PirateController = require('../controllers/pirate.controllers')

module.exports = app => {
    app.get("/api/pirates", PirateController.getAll),
    app.get("/api/pirates/:id", PirateController.getOne),
    app.post("/api/pirates/create", PirateController.create),
    app.put("/api/pirates/update/:id", PirateController.update),
    app.delete("/api/pirates/:id", PirateController.delete)
}