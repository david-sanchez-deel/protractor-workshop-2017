import { $, ElementFinder, promise } from 'protractor';

export class ProductAddedModalPage {

  private get proceedToCheckoutButton(): ElementFinder {
    return $('[style*="display: block;"] .button-container > a');
  }

  public goToCheckoutPage(): promise.Promise<void> {
    return this.proceedToCheckoutButton.click();
  }
}