import {GAMETEAMRESULT} from 'app/lib/enums.js'

class GroupTeam {
    constructor(team) {
        this.team = team
        this.gamesWon = ko.observable(0)
        this.gamesTie = ko.observable(0)
        this.gamesLost = ko.observable(0)
        this.gamesPlayed = ko.pureComputed(() => this.gamesWon() + this.gamesTie() + this.gamesLost())
        this.goalsShot = ko.observable(0)
        this.goalsGot = ko.observable(0)
        this.goalsDiff = ko.pureComputed(() => this.goalsShot() - this.goalsGot())
        this.points = ko.pureComputed(() => this.gamesWon() * 3 + this.gamesTie())
        this.games = new Map()
    }
    static create(team) {
        return new GroupTeam(team)
    }
    addResult(gameName, gameTeamResult, goalsShot, goalsGot) {
      console.log('addResult', gameTeamResult, goalsShot, goalsGot)
      if (gameTeamResult === GAMETEAMRESULT.WON) this.gamesWon(this.gamesWon() + 1)
      if (gameTeamResult === GAMETEAMRESULT.TIE) this.gamesTie(this.gamesTie() + 1)
      if (gameTeamResult === GAMETEAMRESULT.LOST) this.gamesLost(this.gamesLost() + 1)
      this.goalsShot(this.goalsShot() + goalsShot)
      this.goalsGot(this.goalsGot() + goalsGot)
    }
}

export default GroupTeam
