import Team from 'app/lib/team.js'
import Location from 'app/lib/location.js'

let teamData = new Map()
teamData.set("Frankreich", Team.create("Frankreich", "FRA", "fr"))
teamData.set("Rumänien", Team.create("Rumänien", "ROU", "ro"))
teamData.set("Albanien", Team.create("Albanien", "ALB", "al"))
teamData.set("Schweiz", Team.create("Schweiz", "SUI", "ch"))
teamData.set("England", Team.create("England", "ENG", "gb-eng"))
teamData.set("Russland", Team.create("Russland", "RUS", "ru"))
teamData.set("Walse", Team.create("Wales", "WAL", "gb-wls"))
teamData.set("Slowakei", Team.create("Slowakei", "SVK", "sk"))
teamData.set("Deutschland", Team.create("Deutschland", "GER", "de"))
teamData.set("Ukraine", Team.create("Ukraine", "UKR", "ua"))
teamData.set("Polen", Team.create("Polen", "POL", "pl"))
teamData.set("Nordirland", Team.create("Nordirland", "NIR", ""))
teamData.set("Spanien", Team.create("Spanien", "ESP", "es"))
teamData.set("Tschechien", Team.create("Tschechien", "CZE", "cz"))
teamData.set("Türkei", Team.create("Türkei", "TUR", "tr"))
teamData.set("Kroatien", Team.create("Kroatien", "CRO", "hr"))
teamData.set("Belgein", Team.create("Belgein", "BEL", "be"))
teamData.set("Italien", Team.create("Italien", "ITA", "it"))
teamData.set("Irland", Team.create("Irland", "IRL", "ie"))
teamData.set("Schweden", Team.create("Schweden", "SWE", "se"))
teamData.set("Portugal", Team.create("Portugal", "POR", "pt"))
teamData.set("Island", Team.create("Island", "ISL", "is"))
teamData.set("Österreich", Team.create("Österreich", "AUT", "at"))
teamData.set("Ungarn", Team.create("Ungarn", "HUN", "hu"))

let locationData = new Map()
locationData.set("SaintDenis", Location.create("Saint-Denis", "Stade de France", 81338))
locationData.set("Marseille", Location.create("Marseille", "Stade Vélodrome", 67394))
locationData.set("Lyon", Location.create("Décines-Charpieu (Lyon)", "Parc Olympique Lyonnais", 58927))
locationData.set("Paris", Location.create("Paris", "Parc des Princes", 5100))
locationData.set("Lille", Location.create("Villeneuve-d'Ascq (Lille)", "Stade Pierre-Mauroy", 50183))
locationData.set("Lens", Location.create("Lens", "Stade Bollaert-Delelis", 45000))
locationData.set("Bordeaux", Location.create("Bordeaux", "Nouveau Stade de Bordeaudx", 42052))
locationData.set("SaintEtienne", Location.create("Saint-Étienne", "Stade Geoffroy-Guichard", 41950))
locationData.set("Toulouse", Location.create("Toulouse", "Stadium Municipal", 41000))
locationData.set("Nizza", Location.create("Nizza", "Stade de Nice", 35624))

export var teams = teamData
export var locations = locationData
