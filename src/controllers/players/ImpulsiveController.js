import PlayerController from '../PlayerController';

class ImpulsiveController extends PlayerController {
  /**
   * Check the rules for the payment of the property
   *
   * @param object property
   *
   * @return true if the payment as successful
   */
  paymentRules(property) {
    this.payProperty(property.propertyPrice, property.owner);
    return true;
  }
}

export default ImpulsiveController;
