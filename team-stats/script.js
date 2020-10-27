const team = {
  _players: [
    {
      firstName: "Mark",
      lastName: "Tripney",
      age: 46,
    },
    {
      firstName: "Ibi",
      lastName: "Sabo",
      age: 44,
    },
    {
      firstName: "Maxwell",
      lastName: "Sabo",
      age: 12,
    },
  ],
  _games: [
    {
      opponent: "Celtic",
      teamPoints: 2,
      opponentPoints: 0,
    },
    {
      opponent: "Hibs",
      teamPoints: 3,
      opponentPoints: 1,
    },
    {
      opponent: "Motherwell",
      teamPoints: 4,
      opponentPoints: 2,
    },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName,
      lastName,
      age,
    };
    this._players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    const game = {
      opponent,
      teamPoints,
      opponentPoints,
    };
    this._games.push(game);
  },
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

team.addGame("Hearts", 2, 1);
team.addGame("Livingston", 2, 0);
team.addGame("Sporting Liege", 2, 0);

console.log(team.players);
console.log(team.games);
