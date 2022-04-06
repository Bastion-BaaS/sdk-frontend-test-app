import React from "react";
import StripeGetBalance from './StripeGetBalance';
import StripeListCustomers from './StripeListCustomers';
import StripeChargeCustomer from './StripeChargeCustomer';

const StripeDemo = ({ bastion }) => {

  return (
    <div>
      <StripeChargeCustomer bastion={bastion}/>
      <StripeGetBalance bastion={bastion}/>
      <StripeListCustomers bastion={bastion}/>
    </div>
  )
}

export default StripeDemo;
