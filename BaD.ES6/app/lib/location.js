class Location {
  constructor (city, stadium, capacity) {
    this.city = city
    this.stadium = stadium
    this.capacity = capacity
  }

  static create(city, stadium, capacity) {
    return new Location(city, stadium, capacity)
  }
}

export default Location
