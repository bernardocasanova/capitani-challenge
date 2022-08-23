class PropertyController {
  constructor(id, owner) {
    this.id = id;
    this.owner = owner;
    this.rentalPrice = Math.random() * (60 - 30) + 30;
    this.propertyPrice = Math.random() * (90 - 50) + 50;
  }
}

export default PropertyController;
