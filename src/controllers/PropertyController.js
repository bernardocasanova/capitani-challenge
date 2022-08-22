class PropertyController {
  constructor(id, owner) {
    this.id = id;
    this.owner = owner;
    this.rentalPrice = Math.random() * (120 - 30) + 30;
    this.propertyPrice = Math.random() * (120 - 30) + 30;
  }
}

export default PropertyController;
