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

groupTeam.setResult(GAMETEAMRESULT.WON, 2, 0, "A1")
console.log("WON A1 2:0", ko.mapper.toJS(groupTeam))
groupTeam.setResult(GAMETEAMRESULT.TIE, 1, 1, "A2")
console.log("TIE A2 1:1", ko.mapper.toJS(groupTeam))
groupTeam.setResult(GAMETEAMRESULT.TIE, 1, 1)
console.log("empty game name", ko.mapper.toJS(groupTeam))

groupTeam.removeResult("A2")
console.log("remove A2 (WON 2:0)", ko.mapper.toJS(groupTeam))
groupTeam.setResult(GAMETEAMRESULT.WON, 4, 2, "A2")
console.log("WON A2 4:2'", ko.mapper.toJS(groupTeam))
