const { default: Stripe } = require('stripe');

class StripeService {
  constructor() {
    this.stripe = new Stripe('sk_test_51O09FjIAmfS5CdmWaPwzd8Ty5AXUAG4HjwjRNNgRw7VqoExLw46Y8HXJfIXYqVebe25tfcSfiTHjGAUgcfnSoaim00b9wWXF9c'); //sk_test_51NMuifEUCvKs3mMNmSz9bpYdNQqu54Lc0kFRspSmOKqGnpc5iabFJNwZJg3aFoeI8UPxhQWQJ27OYQPDMsWDS7Ki00eG0Dgx2P                                                                                                               
  }
  createPaymentIntents(data) {
    return this.stripe.paymentIntents.create(data);
  }
}
module.exports = new StripeService();