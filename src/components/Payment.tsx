import { useState } from 'react';
import { useAddOrdersMutation } from '@/redux/api/baseApi';

const Payment = () => {
  const [showModal, setShowModal] = useState(false);
  const [addItems] = useAddOrdersMutation();

  // Placeholder function for Stripe integration
  const handleStripePayment = async () => {
    // Implement Stripe payment logic here
    // This is where you would interact with Stripe's API
    console.log('Processing payment with Stripe');
    try {
      const response = await addItems();
      if (response.data) {
        setShowModal(true);
      }
    } catch (error) {
      console.error('Error processing payment:', error);
      // Handle error scenario
      alert('Payment failed. Please try again later.');
    }
  };

  // Modal content for Cash on Delivery confirmation
  const CashOnDeliveryModal = () => {
    return (
      <div className="modal fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="modal-box bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Order Placed!</h3>
          <p className="text-gray-600">
            Your order has been placed successfully. Thank you for ordering!
          </p>
          <button
            onClick={() => setShowModal(false)}
            className="btn btn-primary mt-4"
          >
            Close
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold mt-8 mb-4">Payment Options</h1>
      {/* Payment Options */}
      <div className="flex flex-col gap-4">
        {/* Cash on Delivery Button */}
        <button
          onClick={() => setShowModal(true)}
          className="btn btn-primary"
        >
          Pay Cash on Delivery
        </button>

        {/* Stripe Payment Button */}
        <button
          onClick={handleStripePayment}
          className="btn btn-primary"
        >
          Pay with Stripe
        </button>
      </div>

      {/* Modal for Cash on Delivery */}
      {showModal && <CashOnDeliveryModal />}

      {/* Optional: Stripe Integration */}
      {/* This section would contain Stripe Elements for payment form */}
    </div>
  );
};

export default Payment;
