class PlayerController {
  constructor(strategy, position = 0, money = process.env.ENV_PLAYER_MONEY) {
    this.position = position;
    this.strategy = strategy;
    this.money = Number(money);
    this.gameover = false;
  }

  /**
   * Rent or Buy property
   *
   * @param object property containing property data
   *
   * @return void
   */
  rentOrBuy(property) {
    if (property.owner) {
      if (this !== property.owner) {
        this.payProperty(property.rentalPrice, property.owner);
      }
    } else if (this.paymentRules(property)) {
      property.owner = this;
    }
  }

  /**
   * Execute property payment
   *
   * @param mumber containing the property price for buy or rent
   * @param string containing the property owner
   *
   * @return void
   */
  payProperty(propertyPrice, propertyOwner) {
    this.money -= propertyPrice;
    if (propertyOwner && !propertyOwner.gameover) propertyOwner.money += propertyPrice;
    if (this.money <= 0) this.gameover = true;
  }
}

export default PlayerController;
