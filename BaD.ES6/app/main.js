import Group from 'app/lib/group.js'
import {teams, locations} from 'app/lib/data.js'
import GroupTeam from 'app/lib/groupTeam.js'
import { GAMETEAMRESULT } from 'app/lib/enums.js'

let teamsDiv = document.getElementById("teams")
let addTeamInfo = function(team) {
  let listItem = document.createElement("li");
  listItem.innerHTML = `${team.name} <span class="flag-icon flag-icon-${team.iso2}"></span>`
  teamsDiv.appendChild(listItem)
}

let locationsDiv = document.getElementById("locations")
let addLocationInfo = function(location) {
  let {city, stadium, capacity} = location
  let listItem = document.createElement("li");
  listItem.innerHTML = `<strong>${city}</strong> - ${stadium} <em>(${capacity})</em>`
  locationsDiv.appendChild(listItem)
}

teams.forEach((team) => addTeamInfo(team))
locations.forEach((location) => addLocationInfo(location))

console.log(GAMETEAMRESULT)

let groupTeam = GroupTeam.create(teams.get("Österreich"))

console.log('Österreich', ko.mapper.toJS(groupTeam))

groupTeam.addResult(GAMETEAMRESULT.WON, 2, 0)
groupTeam.addResult(GAMETEAMRESULT.TIE, 1, 1)
console.log("Österreich'", ko.mapper.toJS(groupTeam))

groupTeam.addResult(GAMETEAMRESULT.LOST, 2, 3)
groupTeam.addResult(GAMETEAMRESULT.WON, 4, 2)
console.log("Österreich'", ko.mapper.toJS(groupTeam))
