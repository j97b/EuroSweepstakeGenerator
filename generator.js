const { teams, players } = require('./consts');

const generator = () => {
	const result = [];
	for (i = 0; i < players.length; i++) {
		const index = Math.floor(Math.random() * (24 - i));
		const team = teams[index];
		teams.splice(index, 1);

		result.push({ player: players[i], team });
	}

	return result;
};

module.exports = generator;
