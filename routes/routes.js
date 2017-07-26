const door_controller = require('../controllers/door_controller');

module.exports = (app) => {
	app.get('/doorman/hello', door_controller.hello);

	app.get('/doorman/opened/:name', door_controller.opened);
}