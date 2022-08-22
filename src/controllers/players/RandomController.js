import PlayerController from '../PlayerController';

class RandomController extends PlayerController {
  /**
   * Check the rules for the payment of the property
   *
   * @param object property
   *
   * @return true if the payment as successful
   * @return false if the payment as not successful
   */
  paymentRules(property) {
    if (Math.random() < 0.5) {
      this.payProperty(property.propertyPrice, property.owner);
      return true;
    }
    return false;
  }
}

export default RandomController;
