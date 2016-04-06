class Team {
  constructor(name, shortName, flagCss) {
    this.name = name
    this.shortName = shortName
    this.flagCss = flagCss
  }

  static create(name, shortName, flagCss) {
    return new Team(name, shortName, flagCss)
  }
}

class Game {
  constructor (name, location, startDate, homeTeam, awayTeam) {
    this.name = name
    this.location = location
    this.startDate = startDate
    this.homeTeam = homeTeam
    this.awayTeam = awayTeam
    this.goalsHomeTeam = null
    this.goalsAwayTeam = null
  }

  static create(name, location, startDate, homeTeam, awayTeam) {
    return new Game(name, location, startDate, homeTeam, awayTeam)
  }

  addResult (goalsHomeTeam, goalsAwayTeam) {
    if (Number.isSafeInteger(goalsHomeTeam) && Number.isSafeInteger(goalsAwayTeam)) {
      this.goalsHomeTeam = goalsHomeTeam
      this.goalsAwayTeam = goalsAwayTeam
    }
  }

  hasResult () {
    return Number.isSafeInteger(this.goalsHomeTeam) && Number.isSafeInteger(this.goalsAwayTeam)
  }

  removeResult() {
    this.goalsHomeTeam = null
    this.goalsAwayTeam = null
  }
}

export
