import PlayerController from '../PlayerController';

class DemandingController extends PlayerController {
  /**
   * Check the rules for the payment of the property
   *
   * @param object property
   *
   * @return true if the payment as successful
   * @return false if the payment as not successful
   */
  paymentRules(property) {
    if (property.rentalPrice > 50) {
      this.payProperty(property.propertyPrice, property.owner);
      return true;
    }
    return false;
  }
}

export default DemandingController;
