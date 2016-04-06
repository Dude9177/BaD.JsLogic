class Team {
    constructor(name, iso3, iso2) {
        this.name = name
        this.iso3 = iso3
        this.iso2 = iso2
    }

    static create(name, iso3, iso2) {
        return new Team(name, iso3, iso2)
    }
}

export default Team
