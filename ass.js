import React, { useState } from "react";

const PLAN_OPTIONS = [
  {
    id: 1,
    name: "12 month subscription (offer expired)",
    description: "Total ₹99, ₹8/month",
    originalPrice: 18500,
    discountedPrice: 18321,
  },
  {
    id: 2,
    name: "12 month subscription",
    description: "Total ₹179, ₹15/month",
    originalPrice: 18500,
    discountedPrice: 149,
  },
  {
    id: 3,
    name: "6 month subscription",
    description: "Total ₹149, ₹25/month",
    originalPrice: 18500,
    discountedPrice: 149,
  },
  {
    id: 4,
    name: "3 month subscription",
    description: "Total ₹99, ₹33/month",
    originalPrice: 18500,
    discountedPrice: 149,
  },
];

function PaymentPage() {
  const [selectedPlan, setSelectedPlan] = useState(PLAN_OPTIONS[1]);

  const handlePlanChange = (event) => {
    setSelectedPlan(PLAN_OPTIONS.find((option) => option.id === Number(event.target.value)));
  };

  return (
    <div>
      <div>
        <h2>Access curated courses worth ₹18,500 at just ₹99 per year!</h2>
        <ul>
          <li>100+ Job relevant courses</li>
          <li>20,000+ Hours of content</li>
          <li>Exclusive webinar access</li>
          <li>Scholarship worth 794,500</li>
          <li>Ad Free learning experience</li>
        </ul>
      </div>
      <div>
        <button>Sign Up</button>
        <button>Subscribe</button>
        <h3>Select your subscription plan</h3>
        <div>
          {PLAN_OPTIONS.map((option) => (
            <div key={option.id}>
              <input
                type="radio"
                id={`plan-${option.id}`}
                name="plan"
                value={option.id}
                checked={selectedPlan.id === option.id}
                onChange={handlePlanChange}
              />
              <label htmlFor={`plan-${option.id}`}>
                {option.name}
                <span>{option.description}</span>
              </label>
            </div>
          ))}
        </div>
        <div>
          <p>Subscription fee ₹{selectedPlan.originalPrice}</p>
          <p>Selected offer, discount of ₹{selectedPlan.originalPrice - selectedPlan.discountedPrice}</p>
          <p>Total (incl. of 18% GST) ₹{selectedPlan.discountedPrice}</p>
        </div>
        <button>CANCEL</button>
        <button>PROCEED TO PAY</button>
      </div>
    </div>
  );
}

export default PaymentPage;