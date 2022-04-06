import React, { useState } from "react";

const StripeGetBalance = ({ bastion }) => {
  const [ customers, setCustomers ] = useState([]);

  const runFunction = (name, params) => {
    if (params === '') {params = '{}'}
    bastion.ccf.run(name, params)
      .then(result => {
        const payload = JSON.parse(result.data.Payload);
        setCustomers(payload)
        console.log(payload);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    runFunction('getAllCustomers', '{}')
  }

  return (
    <div>
      <button
        className='py-1 px-4 my-4 bg-gray hover:bg-blue2 text-white rounded-xl'
        onClick={handleSubmit}
      >
        List customers
      </button>
      <ul>
        {customers.length === 0 ? null :
          customers.map(customer => 
            <li key={customer.id} className="py-5 border-b-2">
              <p>Customer ID: {customer.id}</p>
              <p>Customer Name: {customer.name}</p>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default StripeGetBalance;