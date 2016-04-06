function GroupGameResultInput(groupGame) {
    var self = this

    this.goalsSelection = [, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    this.groupGame = groupGame

    var _goalsHomeTeam = ko.observable(this.groupGame.goalsHomeTeam)
    var _goalsAwayTeam = ko.observable(this.groupGame.goalsAwayTeam)

    this.goalsHomeTeam = ko.pureComputed({
        read: function() {
            return _goalsHomeTeam()
        },
        write: function(value) {
            _goalsHomeTeam(value)
            if (isEmpty(value)) {
                _goalsAwayTeam('')
                RemoveGroupGameResult(self.groupGame)
            } else {
                if (isEmpty(_goalsAwayTeam())) {
                    _goalsAwayTeam("" + 0)
                }
                SetGroupGameResult(self.groupGame, _goalsHomeTeam(), _goalsAwayTeam())
            }
            CalculateGroupStats(self.groupGame.group)
            return
        }
    })

    this.goalsAwayTeam = ko.pureComputed({
        read: function() {
            return _goalsAwayTeam()
        },
        write: function(value) {
            _goalsAwayTeam(value)
            if (isEmpty(value)) {
                _goalsHomeTeam('')
                RemoveGroupGameResult(self.groupGame)
            } else {
                if (isEmpty(_goalsHomeTeam())) {
                    _goalsHomeTeam("" + 0)
                }
                SetGroupGameResult(self.groupGame, _goalsHomeTeam(), _goalsAwayTeam())
            }
            CalculateGroupStats(self.groupGame.group)
            return
        }
    })
}
