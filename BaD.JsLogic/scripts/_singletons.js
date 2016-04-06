function isEmpty(optIntValue) {
    if (!optIntValue && optIntValue !== 0) return true;
    return false;
}

function Tournament() {

    // creators
    var Team = function (name, shortName) {
        this.name = name
        this.shortName = shortName
    }

    var Location = function (city, stadium, capacity) {
        this.city = city
        this.stadium = stadium
        this.capacity = capacity
    }


    var GroupGame = function (name, location, startDate, homeTeam, awayTeam) {
        var self = this

        this.group = {}

        this.name = name
        this.location = location
        this.startDate = startDate
        this.homeTeam = homeTeam
        this.awayTeam = awayTeam
        this.goalsHomeTeam = null
        this.goalsAwayTeam = null

        this.SetResult = function(goalsHomeTeam, goalsAwayTeam) {
          self.goalsHomeTeam = goalsHomeTeam
          self.goalsAwayTeam = goalsAwayTeam
        }
    }

    var GroupTeam = function (team) {
        var self = this

        this.team = team
        this.gamesPlayed = ko.observable(0)
        this.gamesWon = ko.observable(0)
        this.gamesTie = ko.observable(0)
        this.gamesLost = ko.observable(0)
        this.goalsShot = ko.observable(0)
        this.goalsGot = ko.observable(0)

        this.goalsFormatted = ko.pureComputed(function() {
          return self.goalsGot()+":"+self.goalsShot()
        })

        this.goalsDiff = ko.pureComputed(function () {
            return self.goalsShot() - self.goalsGot()
        })

        this.points = ko.pureComputed(function () {
            return self.gamesWon() * 3 + self.gamesTie()
        })

        // navigation items
        this.homeGames = []
        this.awayGames = []
    }

    var Group = function (name, teams, groupGames) {
        var self = this

        this.name = name
        this.groupTeams = []
        this.groupGames = groupGames

        // both are for faster navigation
        this.groupTeamsObj = {}
        this.groupGamesObj = {}

        // map teams to groupTeams
        for (var t = 0; t < teams.length; t++) {
            var groupTeam = new GroupTeam(teams[t])
            this.groupTeams.push(groupTeam)
            this.groupTeamsObj[groupTeam.team.name] = groupTeam
        }
        // set groups in groupGames
        for (var g = 0; g < this.groupGames.length; g++) {
          var groupGame = this.groupGames[g]
          groupGame.group = this
          this.groupGamesObj[groupGame.name] = groupGame
          this.groupTeamsObj[groupGame.homeTeam.name].homeGames.push(groupGame)
          this.groupTeamsObj[groupGame.awayTeam.name].awayGames.push(groupGame)
        }
    }

    // singleton data
    var teams = {
        frankreich: new Team("Frankreich", "FRA"),
        rumaenien: new Team("Rumänien", "ROU"),
        albanien: new Team("Albanien", "ALB"),
        schweiz: new Team("Schweiz", "SUI"),
        england: new Team("England", "ENG"),
        russland: new Team("Russland", "RUS"),
        wales: new Team("Wales", "WAL"),
        slowakei: new Team("Slowakei", "SVK"),
        deutschland: new Team("Deutschland", "GER"),
        ukraine: new Team("Ukraine", "UKR"),
        polen: new Team("Polen", "POL"),
        nordirland: new Team("Nordirland", "NIR"),
        spanien: new Team("Spanien", "ESP"),
        tschechien: new Team("Tschechien", "CZE"),
        tuerkei: new Team("Türkei", "TUR"),
        kroatien: new Team("Kroatien", "CRO"),
        belgien: new Team("Belgein", "BEL"),
        italien: new Team("Italien", "ITA"),
        irland: new Team("Irland", "IRL"),
        schweden: new Team("Schweden", "SWE"),
        portugal: new Team("Portugal", "POR"),
        island: new Team("Island", "ISL"),
        oesterreich: new Team("Österreich", "AUT"),
        ungarn: new Team("Ungarn", "HUN")
    }

    var finalTeams = {
        a11: ko.observable(),
        a12: ko.observable(),
        a21: ko.observable(),
        a22: ko.observable()
        // ...
    }

    var locations = {
        saintDenis: new Location("Saint-Denis", "Stade de Fance", 81338),
        marseille: new Location("Marseille", "Stade Vélodrome", 67394),
        lyon: new Location("Décines-Charpieu (Lyon)", "Parc Olympique Lyonnais", 58927),
        paris: new Location("Paris", "Parc des Princes", 51000),
        lille: new Location("Villeneuve-d'Ascq (Lille)", "Stade Pierre-Mauroy", 50183),
        lens: new Location("Lens", "Stade Bollaert-Delelis", 45000),
        bordeaux: new Location("Bordeaux", "Nouveau Stade de Bordeaudx", 42052),
        saintEtienne: new Location("Saint-Étienne", "Stade Geoffroy-Guichard", 41950),
        toulouse: new Location("Toulouse", "Stadium Municipal", 41000),
        nizza: new Location("Nizza", "Stade de Nice", 35624)
    }

    var games = {
        a1: new GroupGame("A1", locations.saintDenis, new Date(2016, 6, 10, 21, 00), teams.frankreich, teams.rumaenien),
        a2: new GroupGame("A2", locations.lens, new Date(2016, 6, 11, 15, 00), teams.albanien, teams.schweiz),
        a3: new GroupGame("A3", locations.paris, new Date(2016, 6, 15, 18, 00), teams.rumaenien, teams.schweiz),
        a4: new GroupGame("A4", locations.marseille, new Date(2016, 6, 15, 21, 00), teams.frankreich, teams.albanien),
        a5: new GroupGame("A4", locations.lille, new Date(2016, 6, 19, 21, 00), teams.schweiz, teams.frankreich),
        a6: new GroupGame("A6", locations.lyon, new Date(2016, 6, 19, 21, 00), teams.rumaenien, teams.albanien),
        b1: new GroupGame("B1", locations.bordeaux, new Date(2016, 6, 11, 18, 00), teams.wales, teams.slowakei),
        b2: new GroupGame("B2", locations.marseille, new Date(2016, 6, 11, 21, 00), teams.england, teams.russland),
        b3: new GroupGame("B3", locations.lille, new Date(2016, 6, 15, 15, 00), teams.russland, teams.slowakei),
        b4: new GroupGame("B4", locations.lens, new Date(2016, 6, 16, 15, 00), teams.england, teams.wales),
        b5: new GroupGame("B5", locations.saintEtienne, new Date(2016, 6, 20, 21, 00), teams.slowakei, teams.england),
        b6: new GroupGame("B6", locations.toulouse, new Date(2016, 6, 20, 21, 00), teams.russland, teams.wales),
        c1: new GroupGame("C1", locations.nizza, new Date(2016, 6, 12, 18, 00), teams.polen, teams.nordirland),
        c2: new GroupGame("C2", locations.lille, new Date(2016, 6, 12, 21, 00), teams.deutschland, teams.ukraine),
        c3: new GroupGame("C3", location.lyon, new Date(2016, 6, 16, 18, 00), teams.ukraine, teams.nordirland),
        c4: new GroupGame("C4", locations.saintDenis, new Date(2016, 6, 16, 21, 00), teams.deutschland, teams.polen),
        c5: new GroupGame("C5", locations.marseille, new Date(2016, 6, 21, 18, 00), teams.ukraine, teams.polen),
        c6: new GroupGame("C6", locations.paris, new Date(2016, 6, 21, 18, 00), teams.nordirland, teams.deutschland),
        d1: new GroupGame("D1", locations.paris, new Date(2016, 6, 12, 15, 00), teams.tuerkei, teams.kroatien),
        d2: new GroupGame("D2", locations.toulouse, new Date(2016, 6, 13, 15, 00), teams.spanien, teams.tschechien),
        d3: new GroupGame("D3", locations.saintEtienne, new Date(2016, 6, 17, 18, 00), teams.tschechien, teams.kroatien),
        d4: new GroupGame("D4", locations.nizza, new Date(2016, 6, 17, 21, 00), teams.spanien, teams.tuerkei),
        d5: new GroupGame("D5", locations.bordeaux, new Date(2016, 6, 21, 21, 00), teams.kroatien, teams.spanien),
        d6: new GroupGame("D6", locations.lens, new Date(2016, 6, 21, 21, 00), teams.tschechien, teams.tuerkei),
        e1: new GroupGame("E1", locations.saintDenis, new Date(2016, 6, 13, 18, 00), teams.irland, teams.schweden),
        e2: new GroupGame("E2", locations.lyon, new Date(2016, 6, 13, 21, 00), teams.belgien, teams.italien),
        e3: new GroupGame("E3", locations.toulouse, new Date(2016, 6, 17, 15, 00), teams.italien, teams.schweden),
        e4: new GroupGame("E4", locations.bordeaux, new Date(2016, 6, 18, 15, 00), teams.belgien, teams.irland),
        e5: new GroupGame("E5", locations.lille, new Date(2016, 6, 22, 21, 00), teams.italien, teams.irland),
        e6: new GroupGame("E6", locations.nizza, new Date(2016, 6, 22, 21, 00), teams.schweden, teams.belgien),
        f1: new GroupGame("F1", locations.bordeaux, new Date(2016, 6, 14, 18, 00), teams.oesterreich, teams.ungarn),
        f2: new GroupGame("F2", locations.saintEtienne, new Date(2016, 6, 14, 21, 00), teams.portugal, teams.island),
        f3: new GroupGame("F3", locations.marseille, new Date(2016, 6, 18, 18, 00), teams.island, teams.ungarn),
        f4: new GroupGame("F4", locations.paris, new Date(2016, 6, 18, 21, 00), teams.portugal, teams.oesterreich),
        f5: new GroupGame("F5", locations.lyon, new Date(2016, 6, 22, 18, 00), teams.ungarn, teams.portugal),
        f6: new GroupGame("F6", locations.saintDenis, new Date(2016, 6, 22, 18, 00), teams.island, teams.oesterreich)
    }

    var groups = {
        a: new Group("A", [teams.frankreich, teams.rumaenien, teams.albanien, teams.schweiz], [games.a1, games.a2, games.a3, games.a4, games.a5, games.a6]),
        b: new Group("B", [teams.england, teams.russland, teams.wales, teams.slowakei], [games.b1, games.b2, games.b3, games.b4, games.b5, games.b6]),
        c: new Group("C", [teams.deutschland, teams.ukraine, teams.polen, teams.nordirland], [games.c1, games.c2, games.c3, games.c4, games.c5, games.c6]),
        d: new Group("D", [teams.spanien, teams.tschechien, teams.tuerkei, teams.kroatien], [games.d1, games.d2, games.d3, games.d4, games.d5, games.d6]),
        e: new Group("E", [teams.belgien, teams.italien, teams.irland, teams.schweden], [games.e1, games.e2, games.e3, games.e4, games.e5, games.e6]),
        f: new Group("F", [teams.portugal, teams.island, teams.oesterreich, teams.ungarn], [games.f1, games.f2, games.f3, games.f4, games.f5, games.f6])
    }
    var groupsIterator = [groups.a, groups.b, groups.c, groups.d, groups.e, groups.f]

    var finalRounds = {}

    this.groups = groups
    this.groupsIterator = groupsIterator
}
