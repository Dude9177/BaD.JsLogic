class Group {
  constructor (name, groupTeams, groupGames) {
    this.name = name
    this.groupTeams = groupTeams
    this.groupGames = groupGames
  }

  static create (name, groupTeams, groupGames) {
    return new Group(name, groupTeams, groupGames)
  }
}

export default Group
