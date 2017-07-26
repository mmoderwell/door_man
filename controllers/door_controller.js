const Door = require('../models/door');

module.exports = {
	hello(req, res) {
		res.send('Hello there!');
	},
	opened(req, res, next) {
		const person = req.params.name;
		
		const opener = new Door({opener: person});
		
		opener.save()
		.then(() => res.send(`${person} just opened the door.`))
		.catch(next);
		console.log(`${person} just opened the door.`);
	}
}