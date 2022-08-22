import PlayerController from '../PlayerController';

class CautiousController extends PlayerController {
  /**
   * Check the rules for the payment of the property
   *
   * @param object property
   *
   * @return true if the payment as successful
   * @return false if the payment as not successful
   */
  paymentRules(property) {
    if ((this.money - property.propertyPrice) >= 80) {
      this.payProperty(property.propertyPrice, property.owner);
      return true;
    }
    return false;
  }
}

export default CautiousController;
