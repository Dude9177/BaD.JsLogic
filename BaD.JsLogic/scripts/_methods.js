function RemoveGroupGameResult(groupGame) {
    groupGame.goalsHomeTeam = null
    groupGame.goalsAwayTeam = null

    console.log("GroupGame " + groupGame.name + " - result removed")

    return groupGame
}

function SetGroupGameResult(groupGame, goalsHomeTeam, goalsAwayTeam) {
    groupGame.goalsHomeTeam = goalsHomeTeam
    groupGame.goalsAwayTeam = goalsAwayTeam

    console.log("GroupGame " + groupGame.name + " - result set (" + goalsHomeTeam + ":" + goalsAwayTeam + ")")

    return groupGame
}

function ResetGroupTeamStats(groupTeam) {
  groupTeam.gamesPlayed(0)
  groupTeam.gamesWon(0)
  groupTeam.gamesTie(0)
  groupTeam.gamesLost(0)
  groupTeam.goalsShot(0)
  groupTeam.goalsGot(0)
}

function AddToObservable(observable, value) {
  observable(observable() + value)
}

function GroupGameHasResult(groupGame) {
  return !isEmpty(groupGame.goalsHomeTeam) && !isEmpty(groupGame.goalsAwayTeam)
}

function CalculateHomeGameStats(groupTeam, groupGame) {
  if (!GroupGameHasResult(groupGame)) return
  AddToObservable(groupTeam.gamesPlayed, 1)
  AddToObservable(groupTeam.goalsShot, groupGame.goalsHomeTeam)
  AddToObservable(groupTeam.goalsGot, groupGame.goalsAwayTeam)
  if (groupGame.goalsHomeTeam > groupGame.goalsAwayTeam) AddToObservable(groupTeam.gamesWon, 1)
  if (groupGame.goalsHomeTeam < groupGame.goalsAwayTeam) AddToObservable(groupTeam.gamesTie, 1)
  if (groupGame.goalsHomeTeam === groupGame.goalsAwayTeam) AddToObservable(groupTeam.gamesLost, 1)
}

function CalculateHomeGamesStats(groupTeam) {
  for(var hg = 0; hg < groupTeam.homeGames.length; hg++) {
    var homeGame = groupTeam.homeGames[hg]
    CalculateHomeGameStats(groupTeam, homeGame)
  }
}

function CalculateAwayGameStats(groupTeam, groupGame) {
  if (!GroupGameHasResult(groupGame)) return
  AddToObservable(groupTeam.gamesPlayed, 1)
  AddToObservable(groupTeam.goalsShot, groupGame.goalsAwayTeam)
  AddToObservable(groupTeam.goalsGot, groupGame.goalsHomeTeam)
  if (groupGame.goalsHomeTeam < groupGame.goalsAwayTeam) AddToObservable(groupTeam.gamesWon, 1)
  if (groupGame.goalsHomeTeam > groupGame.goalsAwayTeam) AddToObservable(groupTeam.gamesTie, 1)
  if (groupGame.goalsHomeTeam === groupGame.goalsAwayTeam) AddToObservable(groupTeam.gamesLost, 1)
}

function CalculateAwayGamesStats(groupTeam) {
  for(var ag = 0; ag < groupTeam.awayGames.length; ag++) {
    var awayGame = groupTeam.awayGames[ag]
    CalculateAwayGameStats(groupTeam, awayGame)
  }
}

function CalculateGroupStats(group) {
  console.log('calculate group', group)
  var group = group

  for(var gt = 0; gt < group.groupTeams.length; gt++) {
    var groupTeam = group.groupTeams[gt]
    ResetGroupTeamStats(groupTeam)
    CalculateHomeGamesStats(groupTeam)
    CalculateAwayGamesStats(groupTeam)
  }
}
